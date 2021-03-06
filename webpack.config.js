const path = require('path');
const DIST_DIR = path.resolve(__dirname, "dist");

module.exports = {
	entry: './src/index.js',
	output: {
		path: DIST_DIR,
		filename: 'cv.bundle.js'
	},

	module: {
		rules: [
			{
			   test: /\.html$/,
			   use: "html-loader"
			},
			{
			  test: /\.scss$/,
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
			{
		        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
		        use: [
		          {
		            loader: 'file-loader',
		            options: {
		              name: '[name].[ext]',
		              outputPath: 'fonts/'
		            }
		          }
		        ]
		    },
		    {
	        	test: /\.(png|svg|jpg|gif)$/,
	        	use: [
	        		'file-loader'
	        	]
	       }
		]
	},

	devServer: {
		index: "index.html",
		contentBase: DIST_DIR,
	}
}