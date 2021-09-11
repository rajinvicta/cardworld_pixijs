/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path");

const merge = require("webpack-merge").merge;

// plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const CalculateDepsPlugin = require('./CalculateDepsPlugin.js');

module.exports = (env) => {
  const config = {
    entry: "./src/Core/index.ts",

    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"],
    },

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            "css-loader",
          ],
        },
      ],
    },
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },

    plugins: [
      new CalculateDepsPlugin(
        ["./src/Core"],
        "src/Dep/ControlContainer.ts",
        ["PixiLayer", "Kernel"], []),

      new HtmlWebpackPlugin({
        title: "Card World - PixiJS"
      }),

      new HtmlWebpackTagsPlugin({ tags: ['main.css'], append: true }),

      new CopyPlugin({
        patterns: [
          {
            from: "assets/**",

            // if there are nested subdirectories , keep the hierarchy
            transformPath(targetPath, absolutePath) {
              const assetsPath = path.resolve(__dirname, "assets");
              const endpPath = absolutePath.slice(assetsPath.length);

              return Promise.resolve(`assets/${endpPath}`);
            },
          },
          {from: "main.css"}
        ],
      }),
    ],
  };
  const envConfig = require(path.resolve(__dirname, `./webpack.${env.mode}.js`))(env);

  const mergedConfig = merge(config, envConfig);

  return mergedConfig;
};
