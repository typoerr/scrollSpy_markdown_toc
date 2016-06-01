const webpack = require("webpack");
const merge = require("webpack-merge");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const WebpackNotifierPlugin = require("webpack-notifier");
const path = require("path");
const PATHS = {
  src: path.join(__dirname, "scripts"),
  dist: path.join(__dirname, "dist"),
};

const common = {
  entry: {
    main: `${PATHS.src}/index.js`,
  },
  output: {
    path: PATHS.dist,
    publicPath: "/dist/",
    filename: "[name].bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
      },
      {
        test: /\.vue$/, // a regex for matching all files that end in `.vue`
        loader: "vue"   // loader to use for matched files
      },
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.md$/,
        loader: "raw"
      }
    ],
  },
  plugins: [
    new WebpackNotifierPlugin({ title: "Webpack" }),
    new CopyPlugin([
      { from: "./index.html" },
    ]),
  ]
};

const devConf = {
  devtool: "inline-source-map",
  devServer: {
    contentBase: "dist/",
    noInfo: true,
    inline: true,
  },
  plugins: [
    new CopyPlugin([
      { from: "./index.html" },
    ]),
  ]
};


const prodConf = {
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
      },
    }),

    // ライブラリ間で依存しているモジュールが重複している場合、二重に読み込まないようにする
    new webpack.optimize.DedupePlugin(),
    // ファイルを細かく分析し、まとめられるところはできるだけまとめてコードを圧縮する
    new webpack.optimize.AggressiveMergingPlugin(),
  ]
};



module.exports = (() => {
  const TARGET = process.env.npm_lifecycle_event;
  let conf = common;
  if (TARGET === "prod") {
    conf = merge(common, prodConf);
  } else {
    conf = merge(common, devConf);
  }

  return conf;
})();
