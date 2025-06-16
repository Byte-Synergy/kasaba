"use client";

const Banners = {
  "link": {
    label: "Link banner",
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
    label: "Hero-1 banner",
    size: {
      y: 400,
      x: 250
    }
  },
  "hero-2": {
    label: "Hero-2 banner",
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
        <h1 className="text-lg font-bold capitalize">{Banners[type].label}</h1>
        <p>
          <span>{Banners[type].size.y}px</span> - 
          <span> {Banners[type].size.x}px</span>
        </p>
        {buttonChildren}
      </div>
    </>
  );
}
