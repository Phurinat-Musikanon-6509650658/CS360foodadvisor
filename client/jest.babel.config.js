module.exports = {
    presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
    plugins: [
    '@babel/plugin-syntax-jsx', // เพิ่มบรรทัดนี้
    ],
};
  