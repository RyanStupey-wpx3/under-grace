const express = require('express');
const cors = require('cors');
const massive = require('massive');
const bodyParser = require('body-parser')
const ctrl = require('./controllers/index-controller.js')
require('dotenv').config();
const app = express();

app.use(cors()); //<-- check postman to see if you need cors

app.use(bodyParser.json());

massive(process.env.DB_CONNECTION_STRING) //<-- need to input connection string into .env file
.then(dbInstance => app.set('db', dbInstance));

const url = '/api' //<-- define endpoint base url here

app.post(`${url}/contact`, ctrl.create)
// app.post(url, ctrl.create)
app.get(`${url}/bins`, ctrl.getBins)
// app.get(url, ctrl.read)
// ctrl.read defined in controller

// app.put(`${url}/:id`, ctrl.update)

app.delete(`${url}/bins/:id`, ctrl.delete)
const port = 3535 

app.listen(port, () => console.log(`Server is listen on port ${port}`))

