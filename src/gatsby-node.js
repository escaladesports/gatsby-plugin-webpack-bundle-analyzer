const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

exports.modifyWebpackConfig = ({ config, stage, store }, options) => {
	if(options.disable) return
	if (
		stage === 'develop' ||
		(options.production && stage === 'build-javascript')
	) {
		config.plugin('webpack-bundle-analyzer', BundleAnalyzerPlugin, [options])
	}
}