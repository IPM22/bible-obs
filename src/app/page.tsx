"use server";
import { getVersions } from "@/actions/versions";
import { SelectVersion } from "@/components/filters/select-version";
import { Suspense } from "react";
// import { ModeToggle } from "@/components/mode-toggle";

export default async function Home() {
  const versions = await getVersions();
  return (
    <section className="flex justify-center mt-6">
      <Suspense fallback={<div>Loading...</div>}>
        <SelectVersion versions={versions} />
      </Suspense>
    </section>
    //  <ModeToggle />
  );
}
