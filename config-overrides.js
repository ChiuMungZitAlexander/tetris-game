const rewireMobX = require('react-app-rewire-mobx')
const rewireLess = require('react-app-rewire-less')
const { injectBabelPlugin } = require('react-app-rewired')

module.exports = function override(config, env) {
  config = injectBabelPlugin('emotion/babel', config)
  config = rewireMobX(config, env)
  config = rewireLess(config, env)

  return config
}