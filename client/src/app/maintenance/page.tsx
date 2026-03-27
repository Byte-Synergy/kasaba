export default function MaintenancePage() {
    return (
        <div className="min-h-screen bg-[#0B0B0F] text-white flex items-center justify-center px-4 relative overflow-hidden">

            {/* Glow background */}
            <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
            <div className="absolute w-[400px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

            <div className="relative z-10 max-w-xl w-full text-center">

                {/* Badge */}
                <div className="inline-block px-4 py-1 mb-6 text-sm rounded-full bg-white/5 border border-white/10 backdrop-blur">
                    🚀 System Upgrade
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                    Biz yangilanayapmiz
                </h1>

                {/* Desc */}
                <p className="text-gray-400 mb-8">
                    Platformani yaxshilash ustida ishlayapmiz. Tez orada kuchliroq qaytamiz.
                </p>

                {/* Progress bar */}
                <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden mb-8">
                    <div className="h-full w-1/2 bg-linear-to-r from-purple-500 to-blue-500 animate-pulse rounded-xl" />
                </div>

                {/* Time hint */}
                <p className="text-sm text-gray-500 mb-6">
                    Taxminiy sana: 30-mart
                </p>
            </div>
        </div>
    );
}
