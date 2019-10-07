# AC-Sem3-A29-1
Solution:
1. 在 app.js 最上方加入
```
app.get('/favicon.ico', (req, res) => res.status(204))
```
避免 favicon.ico 被 GET

2. 增加一個 .js 作為 middleware，取得本地時間及 req.url