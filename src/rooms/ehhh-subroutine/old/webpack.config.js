const path = require('path');
const webpack = require('webpack');
const rules = require('./webpack.rules.js');
const aliases = require('./webpack.aliases.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = function (env, argv) {
	const production = argv.mode === 'production';
	const test = (env && env.test) || null;
	let entry = './src/subroutine.js';

	if (test) {
		rules.push({
			test: /test\.js$/,
			use: 'mocha-loader',
			exclude: /node_modules/
		});
		entry = './src/subroutine.test.js'
	}

	return {
		node: {
			fs: 'empty'
		},
		mode: argv.mode || 'production',
		optimization: {
			minimize: production,
			minimizer: [
				// https://github.com/terser/terser#minify-options
				new TerserPlugin({
					terserOptions: {
						mangle: false,
						extractComments: false
					}
				})
			],
			removeAvailableModules: true,
			removeEmptyChunks: true,
			moduleIds: 'hashed',
			runtimeChunk: true,
			splitChunks: {
				cacheGroups: {
					vendor: {
						test: /[\\/]node_modules[\\/]|[\\/]lib[\\/]/,
						name: 'vendors',
						chunks: 'all'
					},
					default: {
						minChunks: 2,
						priority: -20,
						reuseExistingChunk: true
					}
				}
			}
		},
		entry: ['babel-polyfill', entry],
		output: {
			filename: 'index.js',
			chunkFilename: '[name].[contenthash].bundle.js',
			path: path.resolve(__dirname, 'dist/app')
		},
		resolve: {
			extensions: ['.js'],
			alias: aliases
		},
		module: {
			rules
		},
		plugins: [
			new CleanWebpackPlugin(['dist/app']),
			new HtmlWebpackPlugin({
				title: 'teplate'
			}),
			new CopyWebpackPlugin([{ from: './res/', to: 'res' }]),
			new webpack.ProvidePlugin({
				cgn: [path.resolve(path.join(__dirname, 'src/core/core_namespace.js')), 'default'] //global game object
			})
		],
		devtool: production ? false : 'inline-source-map'
	};
};
