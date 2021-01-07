var path = require('path')


module.exports = {
  //...
  devServer: {
    proxy: [{
      context: ['http://wsl:3000'],
      target: 'http://localhost:3000',
    }]
  }
};
