const path = require("path");
const reactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

let mode = "development";
let target = "web";
const plugins = [
  new CleanWebpackPlugin(),
  new miniCssExtractPlugin({
    filename: "css/styles.[fullhash].css",
  }),
  // {
  //   filename: "css/styles.[fullhash].css",
  // }
  new htmlWebpackPlugin({
    template: "./src/index.html",
  }),
];

if (process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist";
} else {
  plugins.push(new reactRefreshWebpackPlugin());
}

module.exports = {
  mode: mode,
  target: target,

  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[hash][ext][query]",
    // filename: "js/index.[fullhash].js",
    filename: "js/[contenthash].bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 30 * 1024,
          },
        },
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: miniCssExtractPlugin.loader,
            options: { publicPath: "../" },
          },
          "css-loader",

          "postcss-loader",
          "resolve-url-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.hbs$/,
        use: "handlebars-loader",
      },
    ],
  },

  plugins: plugins,

  resolve: {
    extensions: [".js", ".jsx"],
  },

  devtool: "source-map",
  devServer: {
    static: "/dist",
    hot: true,
  },
};
