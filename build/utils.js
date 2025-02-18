"use strict";
const path = require("path");
const config = require("../config");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const packageConfig = require("../package.json");

exports.assetsPath = function(_path) {
  const assetsSubDirectory =
    process.env.NODE_ENV === "production"
      ? config.build.assetsSubDirectory
      : config.dev.assetsSubDirectory;

  return path.posix.join(assetsSubDirectory, _path);
};

exports.cssLoaders = function(options) {
  options = options || {};

  const cssLoader = {
    loader: "css-loader",
    options: {
      sourceMap: options.sourceMap
    }
  };

  const postcssLoader = {
    loader: "postcss-loader",
    options: {
      sourceMap: options.sourceMap
    }
  };

  // generate loader string to be used with extract text plugin
  function generateLoaders(loader, loaderOptions) {
    const loaders = options.usePostCSS
      ? [cssLoader, postcssLoader]
      : [cssLoader];

    if (loader) {
      loaders.push({
        loader: loader + "-loader",
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      });
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: "vue-style-loader"
      });
    } else {
      return ["vue-style-loader"].concat(loaders);
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders("less", { javascriptEnabled: true }),
    sass: generateLoaders("sass", { indentedSyntax: true }),
    scss: generateLoaders("sass"),
    stylus: generateLoaders("stylus"),
    styl: generateLoaders("stylus")
  };
};

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function(options) {
  const output = [];
  const loaders = exports.cssLoaders(options);

  for (const extension in loaders) {
    const loader = loaders[extension];
    output.push({
      test: new RegExp("\\." + extension + "$"),
      use: loader
    });
  }

  return output;
};

exports.createNotifierCallback = () => {
  const notifier = require("node-notifier");

  return (severity, errors) => {
    if (severity !== "error") return;

    const error = errors[0];
    const filename = error.file && error.file.split("!").pop();

    notifier.notify({
      title: packageConfig.name,
      message: severity + ": " + error.name,
      subtitle: filename || "",
      icon: path.join(__dirname, "logo.png")
    });
  };
};

const glob = require("glob");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PAGE_PATH = path.resolve(__dirname, "../src/pages");
const merge = require("webpack-merge");

const debug = process.env.NODE_ENV === "production";

// 多页面入口
exports.entries = function() {
  var entryFiles = glob.sync(PAGE_PATH + "/*/index.js");
  var map = {};
  entryFiles.forEach(filePath => {
    var arry = filePath.split("/");
    var filename = arry[arry.length - 2];
    if (debug) {
      if (filename !== "example" && filename !== "test") {
        map[filename] = filePath;
      }
    } else {
      map[filename] = filePath;
    }
  });
  return map;
};

// 多页面输出
exports.htmlPlugin = function() {
  var htmls = glob.sync(PAGE_PATH + "/*/*.html");
  var output = [];
  htmls.forEach(filePath => {
    var arry = filePath.split("/");
    var filename = arry[arry.length - 2];
    var htmls = [];
    var confg = {
      template: filePath,
      filename: filename + ".html",
      chunks: ["manifest", "vendor", filename],
      inject: true,
      customConfig: debug
        ? '<script src="./static/config/production.js"></script>'
        : '<script src="./static/config/development.js"></script>'
    };
    if (debug) {
      confg = merge(confg, {
        minify: {
          removeComments: true,
          collapseWhitespace: true
          // removeAttributeQuotes: true
        },
        chunksSortMode: "dependency"
      });
      if (filename !== "example" && filename !== "test") {
        output.push(new HtmlWebpackPlugin(confg));
      }
    } else {
      output.push(new HtmlWebpackPlugin(confg));
    }
  });
  return output;
};
