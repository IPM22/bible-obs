import { VersionsResponse } from "@/schemas/versions";

export async function getVersions(): Promise<VersionsResponse> {
  const versions = await fetch("https://api.scripture.api.bible/v1/bibles", {
    headers: {
      "api-key": "7f9f80a60fab6b0d1ebef7f3a914212b",
    },
  })
    .then((res) => res.json())
    .then((data: VersionsResponse) => data);

  return versions;
}
