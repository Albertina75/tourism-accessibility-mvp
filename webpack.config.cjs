import { fileURLToPath } from 'url';
import { dirname, resolve, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const mode = 'production';
export const entry = './src/index.js';
export const output = {
  filename: 'bundle-[contenthash].js',
  path: resolve(__dirname, 'dist'),
};
export const module = {
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
};
export const optimization = {
  splitChunks: {
    cacheGroups: {
      default: false,
      vendors: false,
    },
  },
};
export const devServer = {
  static: join(__dirname, 'dist'),
  compress: true,
  port: 9336,
};
