exports.modifyWebpackConfig = function(config, env) {
  config.loader('styl', function(cfg) {
    cfg.test = /\.styl$/
    cfg.loader = 'style!css!stylus'
    return cfg
  })

  return config
}
