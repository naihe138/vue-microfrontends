const express = require('express')
const app = express()
const history = require('connect-history-api-fallback');
const port = 8080

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Authorization,X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method' )
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, PUT, DELETE')
  res.header('Allow', 'GET, POST, PATCH, OPTIONS, PUT, DELETE')
  next();
});
app.use(history());
app.use(express.static('dist'));
app.listen(port, () => {
  console.log(`base app listening at http://localhost:${port}`)
})
