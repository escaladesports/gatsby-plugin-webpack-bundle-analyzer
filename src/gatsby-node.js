const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

exports.onCreateWebpackConfig = ({ stage, actions }, options) => {
  if (options.disable) return;
  //Gatsby will use stage "develop" on `gatsby develop` and "build-javascript" on `gatsby build`
  if (stage === 'develop' || stage === 'build-javascript') {
    actions.setWebpackConfig({
      plugins: [new BundleAnalyzerPlugin(options)]
    });
  }
};
