module.exports = {
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'Dummy App With No Real Purpose';
      return args;
    });
  }
};
