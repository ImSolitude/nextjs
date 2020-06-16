const repoName = process.env.NODE_ENV === "production" ? "/nextjs" : "";

module.exports = {
  assetPrefix: repoName,
  env: {
    linkPrefix: repoName,
  },
  generateBuildId: async () => "current",
};
