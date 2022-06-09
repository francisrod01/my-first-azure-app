const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      $ENV: {
        API_ENDPOINT: JSON.stringify(process.env.API_ENDPOINT)
      }
    })
  ]
};
