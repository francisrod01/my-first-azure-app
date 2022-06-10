const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      $ENV: {
        API_BASE_URL: JSON.stringify(process.env.API_BASE_URL)
      }
    })
  ]
};
