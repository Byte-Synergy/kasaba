// lib/api-client.ts
export const getAreasFromClient = async (id: number) => {
    const res = await fetch("/api/get-areas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
  
    if (!res.ok) throw new Error("Failed to fetch areas");
  
    const data = await res.json();
    return data.areas;
  };
  