// import { userInfo } from "os";
const axios = require('axios')
module.exports = {
    connect: (req, res) => {
        const authorizationCode = req.query.code;
        console.log(authorizationCode)
        axios.post(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`, {
            client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
            client_secret: process.env.AUTH0_CLIENT_SECRET,
            code: authorizationCode,
            grant_type: 'authorization_code',
            redirect_uri:`http://${req.headers.host}/auth/callback`
        }).then(accessTokenResponse => {
            return axios.get(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo/?access_token=${accessTokenResponse.data.access_token}`)
            .then(userInfoResponse => {
                //start servers
                //need to set up sessions in order to get redirected to /home
                   const userData = userInfoResponse.data

                    return req.app.get('db').lookup_by_auth0_id(userData.sub)

                    .then((users) => {
                        console.log('user[0]',  users[0])
                        if(users.length){

                          const user = users[0]

                            req.session.user  = {
                                auth0_id: user.auth0_id,
                                username: user.name,
                                email: user.email,
                                picture: user.picture,
                                user_status: user.user_status,
                              };
                            //***Q: does this set the session to user??? 
                              req.session.user = user;
                              // once the code h
                              console.log('user', user.username)
                            
                              res.redirect('/adminblog/uhoiu34r78ys7dvh4kjth8y/');
    
                        } else {
                            const user = userInfoResponse.data;
                            console.log('user',user)
                            return req.app.get('db').create_user([user.sub, user.name, user_status, user.picture, user.email])
                            .then((newUser) => {
                                // if it doesnt work --------------------change /\ to user.sub
                                console.log('newUser', newUser)
                                const userNew = {
                                    auth0_id: user.sub,
                                    username: newUser.name,
                                    user_status: 'user',
                                    picture: newUser.picture,
                                    email: newUser.email,
                                }
                                req.session.user = userNew
                                res.redirect('/adminblog/uhoiu34r78ys7dvh4kjth8y');
                            })
                        }
    
                    })

                   

            })
            .catch((errOnToken) => {
                console.log('errOnToken', errOnToken)
                res.status(500).send('error on token')
            })
        })
        .catch((err) => {
            console.log('err', err)
            res.status(500).send('error on server')
        })
        
    }
}


