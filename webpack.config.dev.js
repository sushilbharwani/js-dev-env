/*
* Webpack configuration had five different sections
* mode - development or Production
* entry - where to start
* output - what will be outputed
* loaders - transformations that are applied to the source code of a module
* plugins - 
*/
module.exports = {
    mode: 'development',
    entry: {
        app: './src/app.js',
        adminApp: './src/adminApp.js',
      },
   output: {
      filename: 'bundle.js',
    },
    loaders: {

    }
  };
 