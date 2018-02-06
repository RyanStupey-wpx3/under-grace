const express = require('express');
const cors = require('cors');
const massive = require('massive');
const bodyParser = require('body-parser')
const ctrl = require('./controllers/index-controller.js')

const app = express();

app.use(cors()); //<-- check postman to see if you need cors

app.use(bodyParser.json());

massive(process.env.DB_CONNECTION_STRING)
.then(dbInstance => app.set('db', dbInstance));

const url = 'api/messages' //<-- define endpoint base url here

app.post(url, ctrl.create)
app.post(url, ctrl.create)
// what am i sending? ===  a req.body with a time and text ==>> defined in controller
app.get(url, ctrl.read)
app.get(url, ctrl.read)
// ctrl.read defined in controller
app.put(`${url}/:id`, ctrl.update)
app.put(`${url}/:id`, ctrl.update)

app.delete(`${url}/:id`, ctrl.delete)
app.delete(`${url}/:id`, ctrl.delete)
const port = 3535 

app.listen(port, () => console.log(`Server is listen on port ${port}`))

