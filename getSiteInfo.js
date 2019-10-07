module.exports = function (req, res, next) {
  if (req.url !== '/favicon.ico') {
    console.log(new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })
      + ' | GET from ' + req.url)
  }
  return next()
}