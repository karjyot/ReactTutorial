const path = require('path');  
const HtmlWebpackPlugin = require('html-webpack-plugin');  
  
module.exports = {  
   entry: './src/index.js',  
   output: {  
      path: path.join(__dirname, '/bundle'),  
      filename: 'index_bundle.js'  
   },  
   devServer: {
      // static: path.join(__dirname, 'public/'),
      // devMiddleware: {
      //   publicPath: '/dist/'
      // },
      port: 3000,
      hot: "only",
      historyApiFallback: true
    },
   module: {  
      rules: [  
         {  
            test: /\.jsx?$/,  
            exclude: /node_modules/,  
        use: {  
              loader: "babel-loader",  
            }  
         },
         {
            test: /\.(css|sass|scss)$/,
            use: [
              {
                loader: 'style-loader'
              },
              {
                loader: 'css-loader'
              },
              {
                loader: 'sass-loader'
              }
            ]
          }  
      ]  
   },  
   plugins:[  
      new HtmlWebpackPlugin({  
         template: './src/index.html'  
      })  
   ]  
}  