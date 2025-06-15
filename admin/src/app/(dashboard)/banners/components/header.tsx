"use client";

const Banners = {
  "fit": {
    label: "Link banner",
    size: {
      y: 300,
      x: 250
    }
  },
  "full": {
    label: "Gorizontal banner",
    size: {
      y: 120,
      x: 1240
    }
  }
}

export default function PageViewHeader({
  // title,
  buttonChildren,
  type
}: {
  buttonChildren?: React.ReactNode;
  // title: string;
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
