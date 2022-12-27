const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    print: {
      import: "./src/print.js",
      dependOn: "shared",
    },
    index: {
      import: "./src/index.js",
      dependOn: "shared",
    },
    anotherModule: {
      import: "./src/anotherModule.js",
      dependOn: "shared",
    },
    shared: "lodash",
  },
  devServer: {
    static: "./dist",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Setup",
    }),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].bundle.js",
    clean: true,
    publicPath: "/webpack-config/",
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        node_vendors: {
          name: "vendor",
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          priority: 1,
        },
      },
    },
  },
};
