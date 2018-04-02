var path=require("path");
var webpack =require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

var OpenBrowserPlugin = require('open-browser-webpack-plugin');
const config={
   entry:path.resolve(__dirname,'./app/index.jsx'),
   output:{filename:'bundle.js'},
   resolve: {
    extensions: ['.js', '.jsx', '.json']
    
  },
   // resolve:{extensions:["",".js",".jsx"]},
   // module:{
   //    loaders:[
   //       {test:/\.(js|jsx)$/,exclude:/node_modules/,loader:"babel"},
   //       {test:/\.less$/,exclude:/node_modules/,loader:'style!css!postcss!less'},
   //       {test:/\.(png|gif|jpg|jpeg|bmp)$/i,loader:'url-loader?limit=5000'},
   //       {test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,loader:"url-loader?limit=5000"}

   //    ]
   // },

   module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
       
        exclude: /node_modules/,
        use: {
                    loader: "babel-loader"

          }
        // include: [__dirname+'/app'],
      
      },
      {
        test: /\.(less|css)$/,
         use: [  
                    {  
                        loader: "style-loader"  
                    }, {  
                        loader: "css-loader",  
                        options: {  
                            modules: true  
                        }  
                    }, {  
                        loader: "postcss-loader" ,
                        options:{
                          ident:"postcss",
                          plugins: {'autoprefixer': {browsers: 'last 5 version'}
  }
                        } 
                    }  
                ]  
      }

    ]
  },

   // postcss:[
   //    require("autoprefixer")
   // ],
   plugins:[
      new HtmlWebpackPlugin({


         template:__dirname+'/app/index.html'
      }),
      // new BundleAnalyzerPlugin(),
      //热加载插件
      new webpack.HotModuleReplacementPlugin(),
      // new ExtractTextPlugin("index.css"),
      //打开浏览器
      // new OpenBrowserPlugin({url:"http://localhost:8080"}),
       new OpenBrowserPlugin({
          url: 'http://localhost:8089'
        }),
      //可在业务js代码中使用__DEV__判断是否是dev模式(dev模式下可以提示错误,测试报告等,priduction模式不提示)
      new webpack.DefinePlugin({
         __DEV__:JSON.stringify(JSON.parse((process.env.NODE_ENV=='dev')||"false"))
      })
   ],
   devServer:{
      // colors:true,//终端中输出结果为彩色
    historyApiFallback:true,//不跳转,在开发单页面应用时非常有用,他依赖于HTML5 history API,如设置为TRUE,所有的跳转将指向index.html
      inline:true,
       hot:true,//使用热加载插件,
       port:8089
   }
}
module.exports=config;