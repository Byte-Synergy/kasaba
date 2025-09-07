"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function Header() {
    return (
        <div className="flex justify-between items-center gap-4 flex-wrap">
            <h2 className="text-2xl font-semibold">File Manager</h2>
            <div className="flex gap-3 ml-auto">
                <Input placeholder="Search..." className="w-[250px]" />
                <Button>
                    <Plus className="w-4 h-4 mr-2" /> Upload File
                </Button>
            </div>
        </div>
    );
}