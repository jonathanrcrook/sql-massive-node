const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const massive = require('massive');

const connectionString = "postgres://jonathancrook@localhost/sandbox";

const massiveConnection = massive.connectSync(
  {connectionString: connectionString}
);


const app = express();
const port = 3000;

app.set('db', massiveConnection)
const db = module.exports = app.get('db');

console.log(db);
const controller = require('./productsCtrl.js');


app.use(bodyParser.json())
app.use(cors())
app.use(session({secret: 'keyboard cat'}))

app.post('/', controller.Create);
app.get('/:id', controller.GetOne);
app.get('/', controller.GetAll);
app.put('/', controller.Update);
app.delete('/', controller.Delete)


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});
