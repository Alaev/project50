const app = require('./server');
const port = app.get('port') || 3000;

app.listen(port, () => {
  console.log('\x1b[36m%s\x1b[0m', `App is running on: http://localhost:${port}`);
});
