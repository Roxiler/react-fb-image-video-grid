
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-fb-image-video-grid.cjs.production.min.js')
} else {
  module.exports = require('./react-fb-image-video-grid.cjs.development.js')
}
