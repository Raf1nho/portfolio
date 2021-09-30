module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/portfolio'
  : '/',
  chainWebpack(config) {
    config.plugins.delete('prefetch');
  }
  
};
  