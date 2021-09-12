const Timestamp = new Date().getTime();
const path = require('path');

module.exports = {
	//打包带上相对路径  想要让这个起作用,下面2个必填
	publicPath: './',
	assetsDir: 'assets',

	//生产环境不生成sourceMap
	productionSourceMap: false,

	chainWebpack: config => {
		// 给js和css配置版本号
		if (process.env.NODE_ENV === 'production') {
			config.output.filename('js/[name].' + Timestamp + '.js').end();
			config.output.chunkFilename('js/[name].' + Timestamp + '.js').end();
			config.plugin('extract-css').tap(() => [
				{
					filename: `css/[name].${Timestamp}.css`,
					chunkFilename: `css/[name].${Timestamp}.css`
				}
			]);
		}

		const oneOfsMap = config.module.rule('less').oneOfs.store;
		oneOfsMap.forEach(item => {
			item
				.use('style-resources-loader')
				.loader('style-resources-loader')
				.options({
					patterns: ['src/assets/style/global.less', 'src/assets/style/reset.less', 'src/assets/style/scroll.less']
				})
				.end();
		});
	}
};
