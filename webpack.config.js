var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var entryPath = path.join(__dirname, 'examples/index.js');
var outputPath = path.join(__dirname, 'tmp');
const cssnano = require('cssnano');
const publicPath = '/';

const sass_loader = {
	test: /\.(scss)$/,
	use: [
		{
			loader: 'style-loader'
		},
		{
			loader: 'css-loader'
		},
		{
			loader: 'postcss-loader',
			options: {
				plugins: function() {
					return [
						cssnano({
							autoprefixer: {
								add: true,
								remove: true,
								browsers: [ 'last 2 versions' ]
							},
							discardComments: {
								removeAll: true
							},
							discardUnused: false,
							mergeIdents: false,
							reduceIdents: false,
							safe: true,
							sourcemap: true
						})
					];
				}
			}
		},
		{
			loader: 'sass-loader',
			options: {
				includePaths: [ path.resolve('./src/styles'), path.resolve('./node_modules') ]
			}
		}
	]
};

// common webpack config
var webpack_config = {
	entry: [ entryPath ],
	output: {
		path: outputPath,
		filename: `./[name].js`,
		publicPath
	},

	resolve: {
		extensions: [ '.js', '.elm' ]
	},

	module: {
		noParse: /\.elm$/,
		rules: [
			{
				test: /\.elm$/,
				exclude: [ /elm-stuff/, /node_modules/ ],
				use: [
					{
						loader: 'elm-webpack-loader',
						options: {
							debug: true,
							forceWatch: true
						}
					}
				]
			},
			sass_loader
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: 'examples/index.html',
			inject: 'body',
			filename: 'index.html',
			minify: {
				collapseWhitespace: false
			}
		}),
		new webpack.NoEmitOnErrorsPlugin(),
		new ExtractTextPlugin({ filename: 'static/css/[name].css', disable: false, allChunks: true })
	]
};

module.exports = webpack_config;
