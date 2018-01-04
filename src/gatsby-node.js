const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

exports.modifyWebpackConfig = ({ config, stage, store }, options) => {
	if(stage === 'develop'){
		config.plugin('webpack-bundle-analyzer', BundleAnalyzerPlugin, [options])
	}
}