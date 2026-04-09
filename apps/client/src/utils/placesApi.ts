
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getInteractiveAreasByFetch(
    query: Record<string, any>,
    placeId: number,
    fetchOptions?: Omit<RequestInit, "headers" | "method">
) {
    const params = new URLSearchParams({
        ...query,
        "filter[place][_eq]": placeId.toString(),
        "fields": "*,translations.*,employees.*,employees.translations.*,employees.image.*"
    });
    const url = `${API_BASE_URL}/items/interactive_areas?${params.toString()}`;
    
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
