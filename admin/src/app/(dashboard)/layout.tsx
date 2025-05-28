import DashboardLayout from "@/layouts";
import { ReactNode } from "react";

export const dynamic = "force-dynamic";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <DashboardLayout>{children}</DashboardLayout>
    </div>
  );
}
