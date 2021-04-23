module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/EPortfolio/'
      : '/'
     , 
  css: {
    extract: false
  }
}