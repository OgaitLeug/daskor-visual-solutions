import type { NextConfig } from "next";

const githubPagesPath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const config: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: githubPagesPath,
  assetPrefix: githubPagesPath ? `${githubPagesPath}/` : undefined,
};
export default config;
