const path = require('path');
module.exports = {
 entry: ["babel-polyfill",'./src/chapter10/index.js'],
 //Below commented out will also work for entry
 /*
 entry: {
 app: ["babel-polyfill", "./src/chapter10/index.js"]
 },
 */
 mode: 'development', //use 'production' here for more compact builds for production deployments
 output: {
 filename: 'main.js',
 path: path.resolve(__dirname, 'dist/chapter10/js')
 }
};