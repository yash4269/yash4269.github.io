import { withContentCollections } from "@content-collections/next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const config = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

const finalConfig = {
  ...config,
  ...(basePath && {
    basePath,
    assetPrefix: basePath,
  }),
};

export default withContentCollections(finalConfig);
