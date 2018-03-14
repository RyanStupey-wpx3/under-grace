const express = require('express');
const cors = require('cors');
const massive = require('massive');
const bodyParser = require('body-parser')
const session = require('express-session')
const ctrl = require('./controllers/index-controller.js')
const authCtrl = require('./controllers/authController.js')
const userCtrl = require('./controllers/userctrlr.js')
const cloudin = require('cloudinary')
require('dotenv').config();
const app = express();

app.use(cors()); //<-- check postman to see if you need cors


app.use(bodyParser.json());



app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 60 * 60 * 24 * 14 * 1000
        //two weeks
    }
}))

massive(process.env.DB_CONNECTION_STRING) //<-- need to input connection string into .env file
.then(dbInstance => app.set('db', dbInstance));

const url = '/api' //<-- define endpoint base url here

// app.post(`${url}/contact`, ctrl.create)

app.get('/auth/callback', authCtrl.connect)
//not even hitting end point
// authCtrl.connect

app.get('/api/user-data',userCtrl.getUser)


app.post('/api/logout', userCtrl.destroyUser)


// app.post(url, ctrl.create)
// app.get(`${url}/bins`, ctrl.getBins)


app.get(`${url}/posts`, ctrl.getPosts)
app.post(`${url}/posts`, ctrl.createPosts)
// app.get(url, ctrl.read)
// ctrl.read defined in controller

// app.put(`${url}/:id`, ctrl.update)

app.delete(`${url}/post/:id`, ctrl.delete_post)

const port = 3535 

app.listen(port, () => console.log(`Server is listen on port ${port}`))

