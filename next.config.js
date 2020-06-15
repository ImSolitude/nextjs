const isProd = process.env.NODE_ENV === "production";

module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
    };
  },
  assetPrefix: isProd ? "/nextjs" : "",
  devIndicators: {
    autoPrerender: false,
  },
  env: {
    ASSET_PREFIX: isProd ? "/nextjs" : "",
  },
};
