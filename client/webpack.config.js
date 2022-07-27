const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');

const PATHS = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, '../build'),
};

const commonConfig = {
  entry: {
    index: PATHS.source + '/app.js',
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.[chunkhash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      //Создаем страницу index.html
      filename: 'index.html',
      chunks: ['modal', 'other', 'index'],
      template: PATHS.source + '/index.pug',
      inject: 'body',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.[chunkhash].css', //Выходное имя файла
    }),
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /.js$|.css$/,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: PATHS.source + '/styles',
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif|webp)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
      {
        test: /\.json$/,
        loader: "'json-loader'",
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true,
        },
      },
      {
        test: /\.s[ac]ss$/,
        include: PATHS.source + '/styles',
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
};

const devConfig = {
  devServer: {
    open: true,
    port: 3000,
    hot: true,
  },
};

const prodConfig = {
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: true,
        terserOptions: {
          compress: true,
          mangle: true,
          module: true,
        },
      }),
      new MiniCssExtractPlugin(),
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};

const developmentConfig = merge(commonConfig, devConfig);
const productionConfig = merge(commonConfig, prodConfig);

module.exports = (_, argv) =>
  argv.nodeEnv === 'production' ? productionConfig : developmentConfig;
