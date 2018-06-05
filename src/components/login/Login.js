import React, { Component } from 'react';
import './login.css'
// import {Link} from 'react-router-dom';
class Login extends Component {
    render() {
        const redirectUri = encodeURIComponent(window.location.origin + '/auth/callback');
        const link = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/login?client=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code`;
        return (
            <div>
                <div className="outer-container">

                    <h1>In shelter Under Fire</h1>
                   <div className="link"> <a href={link}>Login </a>
                </div>
            </div>
            </div>
        );
    }
}
export default Login