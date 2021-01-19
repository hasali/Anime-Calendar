const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      
     
        
      issuer: {
        test: /\.(js|ts)x?$/,
        
      },
      use: ['@svgr/webpack'],
      
     
      //test: /\.(css|sass|scss)$/,
      //loader:'url-loader?limit=100000'
      // loader: MiniCssExtractPlugin.loader({ fallback: 'style-loader', use: ['css-loader,sass-loader'] })
      // use: [
      //   {
      //     loader: MiniCssExtractPlugin.loader,
      //     options: {
      //       esModule: true,
      //     },
      //   },
      //   'css-loader',
      // ],

    });

    return config;
  },
};