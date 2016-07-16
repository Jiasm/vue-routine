module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules|vue\/dist/,
        loader: 'babel'
      }, {
        test: /\.css$/,
        loader: 'style!css?module&localIdentName=[hash:base64:5]&-url'
      }, {
        test: /\.html$/,
        loader: 'html'
      }
    ]
  }, babel: {
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-runtime']
  }
};
