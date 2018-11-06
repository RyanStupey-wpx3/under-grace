const express = require('express');
// const cors = require('cors');
const massive = require('massive');
const bodyParser = require('body-parser')
const session = require('express-session')
const ctrl = require('./controllers/index-controller.js')
const authCtrl = require('./controllers/authController.js')
const userCtrl = require('./controllers/userctrlr.js')
const cloudin = require('cloudinary')
const nodeMailer = require('nodemailer')
const app = express();
require('dotenv').config();

// app.use(cors()); //<-- check postman to see if you need cors


app.use(bodyParser.json());

app.use( express.static( `${__dirname}/../build` ) );

app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 60 * 60 * 24 * 14 * 1000
        //two weeks
    }
}))

massive(process.env.CONNECTION_STRING) 
.then(dbInstance => app.set('db', dbInstance));
console.log('process.env.CONNECTION_STRING', process.env.CONNECTION_STRING)
const url = '/api' //<-- define endpoint base url here

// app.post(`${url}/contact`, ctrl.create)

app.get('/auth/callback', authCtrl.connect)
app.get('/api/user-data',userCtrl.getUser)
app.post('/api/logout', userCtrl.destroyUser)
app.post('/api/send-email', function (req, res) {
    console.log('hit!')

    console.log("req.body", req.body )
    let transporter = nodeMailer.createTransport({
        service: 'gmail',
        secure: false,
        port: 3535,
        auth: {
            user: 'ryan.stupey@gmail.com',
            pass: process.env.PASSWORD
        },
        tls: {
            rejectUnauthorized: false,

        }
    });

    let mailOptions = {
        from: req.body.from, // sender address
        to: 'ryan.stupey@gmail.com', // list of receivers
        subject: req.body.subject, // Subject line
        html: `<h2>from:${req.body.name}</h2><br/><h2> Email: ${req.body.from}</h2><b>${req.body.message}</b>` // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        });
    });



app.get(`${url}/posts`, ctrl.getPosts)
app.post(`${url}/posts`, ctrl.createPosts)
app.put(`/api/posts/:id`, ctrl.update)

app.delete(`${url}/post/:id`, ctrl.delete_post)

const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

const port = 3535 

app.listen(port, () => console.log(`Server is listen on port ${port}`))

// npm install react-scripts@2.1.1