"use client";

import PageHandler from "../components/handler";
import { useEffect, Suspense } from "react";
import { useRouter } from "next/navigation";
import { useQueryState } from "nuqs";

function PageContent() {
  const router = useRouter();
  const [name] = useQueryState("name");
  const [dType] = useQueryState("type");

  useEffect(() => {
    if (!name) return router.push("/pages");
  }, [name]);

  return <PageHandler mode="create" type={dType as any} />;
}

export default function Page() {
  return (
    <Suspense fallback={<div></div>}>
      <PageContent />
    </Suspense>
  );
}