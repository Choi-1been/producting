module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: process.env.NODE_ENV === 'production' ? '/producting/' : '/',
  chainWebpack: (config) => {
    config
        .plugin('html')
        .tap(args => {
          args[0].title = 'CRvending';
          args[0].meta = {viewport: 'width=1920px,height=1200px,initial-scale=1'};

          return args;
        })
  }
}

