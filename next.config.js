const isProd = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProd ? "/" : "",
  devIndicators: {
    autoPrerender: false,
  },
  env: {
    ASSET_PREFIX: isProd ? "/" : "",
  },
};
