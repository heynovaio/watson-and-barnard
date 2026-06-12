/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — deployable to Netlify as plain files (out/).
  output: "export",
  // A stray lockfile in the home dir makes Next mis-infer the workspace root;
  // pin it to this project so the app/ dir resolves correctly.
  outputFileTracingRoot: __dirname,
  // Gatsby emitted directory-style trailing-slash URLs (/about/). Preserve them
  // so existing inbound links and SEO are not broken.
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    // Static export disables the default Next image optimizer, so we use
    // next-image-export-optimizer to resize/convert to WebP at build time.
    loader: "custom",
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  transpilePackages: ["next-image-export-optimizer"],
  env: {
    nextImageExportOptimizer_imageFolderPath: "public/images",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: "75",
    nextImageExportOptimizer_storePicturesInWEBP: "true",
    nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",
    nextImageExportOptimizer_generateAndUseBlurImages: "true",
    nextImageExportOptimizer_remoteImageCacheTTL: "0",
  },
}

module.exports = nextConfig
