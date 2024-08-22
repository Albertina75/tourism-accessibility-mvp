const path = require('path');

module.exports = {
  mode: 'production', // Cambia a 'development' si estás en desarrollo
  entry: './src/index.js',
  output: {
    filename: 'bundle-[contenthash].js', // Usa un nombre único para evitar conflictos
    path: path.resolve(__dirname, 'dist'),
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
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
      },
    },
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 9336,
  },
};
