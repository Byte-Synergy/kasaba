import { create } from 'zustand';

interface WeatherData {
    current: any | null;
    daily: any | null;
    hourly: any | null;
    loading: boolean;
    error: string | null;
    selectedRegion: string;
    setRegion: (region: string) => void;
    fetchWeather: (region?: string) => Promise<void>;
    fetchWeatherWithCoordinates: (lat: number, lon: number) => Promise<void>;
}

export const useWeatherStore = create<WeatherData>((set, get) => ({
    current: null,
    daily: null,
    hourly: null,
    loading: false,
    error: null,
    selectedRegion: 'Toshkent', // Default region

    setRegion: (region) => set({ selectedRegion: region }),

    fetchWeather: async (regionName = "Termiz") => {
        const region = regionName || get().selectedRegion;
        set({ loading: true, error: null });

        try {
            // 1. Get coordinates using Nominatim
            const geoRes = await fetch(
                `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(region)}&format=json`
            );
            const geoData = await geoRes.json();

            if (!geoData.length) throw new Error('Manzil topilmadi');

            const lat = geoData[0].lat;
            const lon = geoData[0].lon;

            console.log("location:", lat, lon);


            // 2. Fetch weather data from Open-Meteo
            const weatherRes = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m,precipitation&daily=temperature_2m_max,temperature_2m_min&timezone=auto`
            );
            const weatherData = await weatherRes.json();

            set({
                current: weatherData.current_weather,
                daily: weatherData.daily,
                hourly: weatherData.hourly,
                loading: false,
            });
        } catch (error: any) {
            set({ error: error.message, loading: false });
        }
    },

    fetchWeatherWithCoordinates: async (lat: number, lon: number) => {
        try {
            const weatherRes = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m,precipitation&daily=temperature_2m_max,temperature_2m_min&timezone=auto`
            );
            const weatherData = await weatherRes.json();
    
            set({
                current: weatherData.current_weather,
                daily: weatherData.daily,
                hourly: weatherData.hourly,
                loading: false,
            });
        } catch (error: any) {
            set({ error: error.message, loading: false });
        }
    },
}));
