const path = require('path');
module.exports = {
  mode: 'development', // Establece el modo a 'development' o 'production'
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  optimization: {
    splitChunks: false, // Desactiva el code-splitting temporalmente
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 9012, // Asegúrate de que el puerto no esté en uso
  },
};
