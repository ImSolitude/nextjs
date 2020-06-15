const isProd = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProd ? "/nextjs" : "",
  devIndicators: {
    autoPrerender: false,
  },
  env: {
    ASSET_PREFIX: isProd ? "/nextjs" : "",
  },
};
