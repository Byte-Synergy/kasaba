import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-100px)] flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-indigo-600">404</h1>
        <h2 className="mt-4 text-3xl font-semibold">Sahifa topilmadi</h2>
        <p className="mt-2 text-gray-600">Siz izlayotgan sahifa mavjud emas.</p>
        <div className="mt-6">
          <Link
            href="/"
            className="rounded bg-indigo-600 px-4 py-2 text-white transition-colors hover:bg-indigo-700"
          >
            Bosh sahifaga qaytish
          </Link>
        </div>
      </div>
    </div>
  );
}
