const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "docs"), // Build folder
    filename: "bundle.js",
    publicPath: "/andreatopic.portfolio/", // GitHub Pages project repo name
  },
  mode: process.env.NODE_ENV || "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
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
        generator: {
          filename: "img/[path][name][ext]", // Preserve subfolders inside src/img
        },
        include: path.resolve(__dirname, "src"),
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Allows importing .js or .jsx without extension
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      favicon: "./src/favicon.ico",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/404.html", to: "404.html" }, // Needed for React Router on GitHub Pages
      ],
    }),
  ],
  devtool: "cheap-module-source-map",
  devServer: {
    static: path.resolve(__dirname, "docs"),
    port: 3000,
    open: true,
    headers: {
      "Content-Security-Policy":
        "default-src 'self'; img-src 'self' data: https:;",
    },
    historyApiFallback: true, // React Router SPA fallback
  },
};
