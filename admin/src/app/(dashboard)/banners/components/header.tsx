"use client";

const Banners = {
  "link": {
    label: "Arxiv ostidagi banner",
    size: {
      y: 300,
      x: 250
    }
  },
  "horizontal": {
    label: "Gorizontal banner",
    size: {
      y: 120,
      x: 1240
    }
  },
  "hero-1": {
    label: "Top-1 banner",
    size: {
      y: 400,
      x: 250
    }
  },
  "hero-2": {
    label: "Top-2 banner",
    size: {
      y: 400,
      x: 250
    }
  },
}

export default function PageViewHeader({
  buttonChildren,
  type
}: {
  buttonChildren?: React.ReactNode;
  type: keyof typeof Banners
}) {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-md font-bold capitalize">{Banners[type].label}</h1>
        <p className="text-xs p-1 bg-amber-500 rounded-sm text-white">
          <span>{Banners[type].size.y}px</span> - 
          <span> {Banners[type].size.x}px</span>
        </p>
        {buttonChildren}
      </div>
    </>
  );
}
