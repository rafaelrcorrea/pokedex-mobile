module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@components': './src/components',
          '@assets': './src/assets',
          '@config': './src/config',
          '@styles': './src/styles',
          '@graphql': './src/graphql',
          '@store': './src/store',
        },
      },
    ],
  ],
};
