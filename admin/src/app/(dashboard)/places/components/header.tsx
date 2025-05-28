export default function PageViewHeader({ title }: { title: string }) {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold capitalize">{title}</h1>
      </div>
    </>
  );
}
