import { create } from 'zustand';

interface WeatherData {
    current: {
        temperature: number;
        windspeed: number;
        winddirection: number;
        weathercode: number;
        time: string;
    } | null;
    daily: {
        time: string[];
        temperature_2m_max: number[];
        temperature_2m_min: number[];
    } | null;
    hourly: {
        time: string[];
        temperature_2m: number[];
        precipitation: number[];
    } | null;
    loading: boolean;
    error: string | null;
    selectedRegion: string;
    setRegion: (region: string) => void;
    fetchWeather: (region?: string) => Promise<void>;
    fetchWeatherByCoordinates: (lat?: number, lon?: number) => Promise<void>;
}

export const useWeatherStore = create<WeatherData>((set, get) => ({
    current: null,
    daily: null,
    hourly: null,
    loading: false,
    error: null,
    selectedRegion: 'tashkent',

    setRegion: (region) => set({ selectedRegion: region }),

    fetchWeather: async (regionName) => {
        const region = regionName || get().selectedRegion;
        set({ loading: true, error: null });

        try {
            const geoRes = await fetch(
                `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(region)}&format=json`
            );
            const geoData = await geoRes.json();

            if (!geoData.length) throw new Error('Manzil topilmadi');

            const lat = geoData[0].lat;
            const lon = geoData[0].lon;

            await get().fetchWeatherByCoordinates(Number(lat), Number(lon)); // ✅ Shunday qilib ishlatilsa bo‘ladi
        } catch (error) {
            const err = error as Error;
            set({ error: err.message, loading: false });
        }
    },

    fetchWeatherByCoordinates: async (lat?: number, lon?: number) => {
        // Default to Tashkent coordinates if none provided or invalid
        const latitude = lat ?? 41.311081;
        const longitude = lon ?? 69.240562;

        if (Number.isNaN(latitude) || Number.isNaN(longitude)) {
            console.error("❌ Invalid coordinates:", { latitude, longitude });
            set({ error: "Koordinatalar noto'g'ri", loading: false });
            return;
        }

        set({ loading: true, error: null });
        
        try {
            const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,precipitation&daily=temperature_2m_max,temperature_2m_min&timezone=auto`;
            
            const weatherRes = await fetch(url);
            
            if (!weatherRes.ok) {
                throw new Error(`Server xatosi: ${weatherRes.status}`);
            }

            const weatherData = await weatherRes.json();
    
            if (!weatherData.current_weather) {
                throw new Error("Joriy ob-havo ma'lumotlari topilmadi.");
            }
            
            set({
                current: weatherData.current_weather,
                daily: weatherData.daily,
                hourly: weatherData.hourly,
                loading: false,
            });
        } catch (error) {
            const err = error as Error;
            console.error("❌ Weather fetch error:", err);
            set({ 
                error: err.name === 'TypeError' && err.message === 'Failed to fetch' 
                    ? "Internet aloqasi yoki API bloklangan bo'lishi mumkin" 
                    : err.message, 
                loading: false 
            });
        }
    },    
}));
