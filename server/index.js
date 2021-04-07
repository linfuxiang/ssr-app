const ignore = () => {
  const extensions = [".css", ".scss", ".less", ".png", ".jpg", ".gif"];
  for (let ext of extensions) {
    require.extensions[ext] = function () {
      return false;
    };
  }
};
ignore();

require("babel-register");
require("babel-polyfill");
require("./app.js");
