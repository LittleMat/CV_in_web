const path = require('path');
const DIST_DIR = path.resolve(__dirname, "dist");

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'cv.bundle.js'
	},

	module: {
		rules: [
			{
				test: /\.css$/i, 
				use: ['style-loader', 'css-loader']
			},
			{
			   test: /\.html$/,
			   use: "raw-loader"
			},
			{
			  test: /\.(scss)$/,
			  use: [{
			    loader: 'style-loader', // inject CSS to page
			  }, {
			    loader: 'css-loader', // translates CSS into CommonJS modules
			  }, {
			    loader: 'postcss-loader', // Run post css actions
			    options: {
			      plugins: function () { // post css plugins, can be exported to postcss.config.js
			        return [
			          require('precss'),
			          require('autoprefixer')
			        ];
			      }
			    }
			  }, {
			    loader: 'sass-loader' // compiles Sass to CSS
			  }]
			},
		]
	},

	devServer: {
		index: "index.html",
		contentBase: DIST_DIR,
	}
}