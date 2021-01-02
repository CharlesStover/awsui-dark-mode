module.exports = {
  ignore: [/node_modules\/?!@awsui\/(?:components-react|design-tokens)/],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          esmodules: true,
        },
      },
    ],
  ],
};
