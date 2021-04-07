// const ignore = () => {
//   const extensions = [".css", ".scss", ".less", ".png", ".jpg", ".gif"];
//   for (let ext of extensions) {
//     require.extensions[ext] = function () {
//       return false;
//     };
//   }
// };
// ignore();
require("css-modules-require-hook/preset");
require("asset-require-hook")({
  extensions: ["jpg", "png", "gif", "webp"],
});

require("babel-register");
require("babel-polyfill");
require("./app.js");
