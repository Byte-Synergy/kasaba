
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getInteractiveAreasByFetch(
    query: Record<string, any>,
    placeId: number,
    fetchOptions?: Omit<RequestInit, "headers" | "method">
) {
    const params = new URLSearchParams(query);
    const url = `${API_BASE_URL}/api/rest/places/${placeId}/interactive_areas?`;
    
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            ...fetchOptions,
        });

        const data = await response.json();
        
        return {
            data: response.ok ? data : null,
            error: response.ok ? null : data,
            status: response.status,
        };
    } catch (error: any) {
        return {
            data: null,
            error: error.message || "Fetch error",
            status: 500,
        };
    }
}
