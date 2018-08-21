const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

// eslint-disable-next-line import/prefer-default-export
export const onCreateWebpackConfig = ({ actions, stage }, options) => {
  if (options.disable) return;
  if (
    stage === "develop" ||
    (options.production && stage === "build-javascript")
  ) {
    actions.setWebpackConfig({
      plugins: [new BundleAnalyzerPlugin(options)]
    });
  }
};
