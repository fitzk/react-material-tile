## webpack Configuration Notes

### necessary dependencies (package.json)
babel-core
babel-cli


### entry

##### babel-polyfill

Allows for the use of built-ins like Promise or WeakMap, static methods like Array.from or Object.assign, instance methods like Array.prototype.includes, and generator functions (provided you use the regenerator plugin). The polyfill adds to the global scope as well as native prototypes like String in order to do this.

It is necessary in this project because the component uses Object.assign.

##### source/index.js:
###### explanation  
Source code to be transformed and compiled and bundled.

### output
##### distribution/index.js
###### explanation
Transformed and compiled (commonjs) and bundled source code.

##### index.map
###### explanation
file that contains the source map

### devtool
##### source-map
###### explanation
A full SourceMap is emitted as a separate file. It adds a reference comment to the bundle so development tools know where to find it.

### externals
libraries:
  - react
  - react-dom
  - material-ui

###### explanation  
externals are dependencies that are required to use this module, but
are not provided, thus this module assumes that the user includes these dependencies in their project

### plugins  
##### webpack/LoaderOptionsPlugin
###### explanation  
UglifyJsPlugin does not minimize loaders by default now, set to true
to allow for compatibility with old loaders
- minimize: true  

##### webpack/optimize/UglifyJsPlugin
###### explanation
minimzes code for production

##### extractCSS (extract-text-webpack-plugin):
###### explanation  
It moves every require("style.css") in entry chunks into a separate css output file. So your styles are no longer inlined into the javascript, but separate in a css bundle file (styles.css). If your total stylesheet volume is big, it will be faster because the stylesheet bundle is loaded in parallel to the javascript bundle.

### resolve  
- extensions: * js jsx json css scss png jpg svg
- modules: source, node_modules

### module

#### rules
- scss
    loader: extractCSS(css-loader, sass-loader)  

- (png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|html)  
    loader: file-loader

- (js|jsx)  
    loader: babel-loader
    exclude: node_modules
    include: source
    options:
      babelrc: false
      presets:
        es2015:
          loose: true,
          modules: false
        react:
      plugins:
        transform-runtime:

#### node
    fs: empty
