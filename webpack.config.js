const path = require("path");
const dev = process.env.NODE_ENV == "development";
const liveServer = require("live-server");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

if (dev) {
  liveServer.start({
    root: "./",
    file: "index.html",
  });
}
module.exports = {
  watch: dev,
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          "styled-components-loader",
          {
            loader: "babel-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "medias/", // especifica la carpeta de salida para las imágenes
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".js", ".ts"],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: "./tsconfig.json",
      }),
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
