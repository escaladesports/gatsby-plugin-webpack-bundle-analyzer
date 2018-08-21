const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

exports.onCreateWebpackConfig = ({ stage, actions }, options) => {
	if(options.disable) return
	if (
		stage === 'develop' ||
		(options.production && stage === 'build-javascript')
	) {
		actions.setWebpackConfig({
			plugins: [new BundleAnalyzerPlugin(options)]
		})
	}
}
