export default function Loading() {
    return (
        <div className="p-6 space-y-6 animate-pulse">
            <div className="h-6 w-40 bg-gray-200 rounded"></div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="h-24 bg-gray-200 rounded-xl"></div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="h-20 bg-gray-200 rounded-xl"></div>
                    ))}
                </div>
                <div className="h-64 bg-gray-200 rounded-xl"></div>
            </div>
        </div>
    );
}
