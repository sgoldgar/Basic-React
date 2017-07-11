module.exports = {
  entry: [
    './src/main.react.js'
  ],
  module: {
    rules: [{
      test: /\.react\.js?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: [
              ["es2015", {
                modules: false
              }],
              "react",
            ]
          }
        }
      ]
    }]
  },
  resolve: {
    extensions: ['.js', '.react.js']
  },
  output: {
    path: __dirname + '/dist',
    filename: 'site.js'
  }
};
