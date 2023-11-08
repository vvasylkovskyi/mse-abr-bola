const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./index.ts",
  devtool: "inline-source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Hello World",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "./segments"),
          to: path.join(__dirname, "dist/segments"),
        },
      ],
    }),
  ],
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    allowedHosts: "all",
    static: path.join(__dirname, "dist"),
    compress: true,
    host: "0.0.0.0",
    client: {
      overlay: false,
    },
    server: {
      type: "http",
      options: {},
    },
  },
};
