const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");



module.exports = {
  entry: "./src/index.js",
 output: {
  path: path.resolve(__dirname, 'docs'),
  filename: 'bundle.js',
  publicPath: '', // this ensures relative paths
 },
  mode: process.env.NODE_ENV || "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, 
        type: "asset/resource",
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      favicon: "./src/favicon.ico"
    }),
  ],
  devtool: "cheap-module-source-map", // Fast & useful in development
  devServer: {
    static: path.resolve(__dirname, "docs"),
    port: 3000,
    open: true, headers: {
    "Content-Security-Policy": "img-src 'self';"
    },
   historyApiFallback: true, // This ensures React Router handles all routes
  },
};
