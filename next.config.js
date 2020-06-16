const repoName = process.env.NODE_ENV === "production" ? "" : "";

module.exports = {
  // target: "serverless",
  assetPrefix: repoName,
  env: {
    linkPrefix: repoName,
  },
  generateBuildId: async () => "current",
};
