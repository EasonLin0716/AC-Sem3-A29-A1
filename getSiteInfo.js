module.exports = function (req, res, next) {
  console.log(new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })
    + ' | ' + req.method + ' from ' + req.url)
  return next()
}