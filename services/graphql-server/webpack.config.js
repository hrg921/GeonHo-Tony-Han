const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: ['./src/main.ts'],
  target: 'node',
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
        option: {
          configFile: './tsconfig.build.json',
          transpileOnly: true,
        },
      },
    ],
  },
  resolve: {
    mainFields: ['main', 'module'],
    extensions: [
      '*',
      '.webpack.js',
      '.web.js',
      '.mjs',
      '.js',
      '.jsx',
      '.json',
      '.ts',
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.js',
  },
  externals: [nodeExternals()],
};
