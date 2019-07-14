const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');

const dir = folder => path.resolve(__dirname, folder);

module.exports = {
  mode: 'development',
  entry: dir('src'),
  output: {
	publicPath: dir('public'),
	filename: 'bundle.js'
  },
  devtool: 'cheap-module-source-map',
  devServer: {
	historyApiFallback: true,
	contentBase: dir('dist'),
	compress: true,
	port: 3000,
	writeToDisk: true,
	proxy: {
	  '/api/': 'http://localhost:3001/'
	},
	host: '0.0.0.0'
  },
  module: {
	rules: [
	  {
		test: /\.m?js$/,
		exclude: /node_modules/,
		use: ['babel-loader']
	  },
	  {
		test: /\.(scss|sass)$/,
		use: ['style-loader', 'css-loader', 'sass-loader']
	  },
	  {
		test: /\.less$/,
		use: ['style-loader', 'css-loader', 'less-loader']
	  },
	  {
		test: /\.css$/,
		use: ['style-loader', 'css-loader']
	  },
	  {
		test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
		use: ['url-loader']
	  },
	  {
		test: /\.(png|jpg|jpeg|svg|gif|ttf|eot)?$/,
		use: [
		  {
			loader: 'file-loader',
			options: {
			  name: '[path][name].[ext]'
			}
		  }
		]
	  }
	]
  },
  plugins: [
	new cleanWebpackPlugin(),
	new htmlWebpackPlugin({
	  hash: true,
	  template: dir('public/template.html')
	})
  ]
}
