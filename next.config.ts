import type { NextConfig } from "next";

const githubPagesPath = process.env.GITHUB_ACTIONS
  ? "/daskor-visual-solutions"
  : "";

const config: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: githubPagesPath,
  assetPrefix: githubPagesPath ? `${githubPagesPath}/` : undefined,
};
export default config;
