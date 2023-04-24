module.exports = {   module: {     rules: [
           {         test: /\.js$/,         exclude: /node_modules/,         loader: 'babel-loader',          options: {           presets: ['@babel/preset-react']         }       },
           {
            test: /\.(jpg|png|webp)$/,
            loader: 'url-loader'
           }    
        
        ]   } };