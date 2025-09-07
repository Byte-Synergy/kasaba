import FolderItem from "./folderItem";

const folders = [
    { name: "Image", files: 345 },
    { name: "Documents", files: 130 },
    { name: "Apps", files: 130 },
    { name: "Downloads", files: 345 },
];

export function Folders() {
    return (
        <div className="p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {folders.map((folder) => (
                    <FolderItem folder={folder} key={folder.name} />
                ))}
            </div>
        </div>
    );
}