const ExtractTextPlugin = require('extract-text-webpack-plugin')

exports.modifyWebpackConfig = function (config, env) {
  config.loader('styl', function (cfg) {
    cfg.test = /\.styl$/

    switch (env) {
      case 'build-css':
        cfg.loader = ExtractTextPlugin.extract(['css?minimize', 'stylus'])
        break
      case 'build-html':
      case 'build-javascript':
        cfg.loader = 'null'
        break
      default:
        cfg.loader = 'style!css!stylus'
    }

    return cfg
  })

  return config
}
