module.exports = function (req, res, next) {
  console.log(new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })
    + ' | GET from ' + req.url)
  return next()
}