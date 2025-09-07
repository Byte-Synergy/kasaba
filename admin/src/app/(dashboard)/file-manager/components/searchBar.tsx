export default function SearchBar() {
    return (
        <label className="relative block w-full sm:w-[420px]">
            <input
                type="text"
                placeholder="Search…"
                className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-3 py-2.5 shadow-sm outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
        </label>
    );
}