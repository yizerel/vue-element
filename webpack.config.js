const path = require('path');
const HtmlWebpackplugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = {
  mode: 'development', // 指定开发者打包模式
  entry : './src/index.js', //入口文件
  output : {
      filename : 'index.js',
      path :  __dirname+'/dist'
  },
  module : {
      rules: [
          {
            /*将js文件转码成es5*/
            test: /\.js?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                strictMath: true,
              },
            },
          },
        ],
      },        
          {
            test: /\.vue$/,
            use: [
              {
                loader: 'vue-loader',
                options: {
                  compilerOptions: {
                    preserveWhitespace: false
                  },
                }
              }
            ]
          },
          {
            test: /\.css$/,
            use: [{ loader: 'style-loader' }, MiniCssExtractPlugin.loader, 'css-loader'],
          },
          {
            test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
            use: [{
              loader: 'url-loader',
              options: {
                limit: 10000
              }
            }]
          }
        ]
  },
  plugins:[
    new HtmlWebpackplugin({
      filename: 'index.html', // 打包后的文件名，默认index.html
      template: path.resolve(__dirname, 'index.html') // 导入被打包的文件模板
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin()
  ],
  devServer: { 
    host: 'localhost',
    port: 9527
  },
  optimization: {
    minimizer: [new TerserPlugin()]
  }
}
