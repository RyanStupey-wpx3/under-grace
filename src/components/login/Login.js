import React, { Component } from 'react';
import './login.css'

class Login extends Component {
    render() {
        const redirectUri = encodeURIComponent(window.location.origin + '/auth/callback');
        const Link = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/login?client=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}`;
        return (
            <div>
                <div className="outer-container">

                    <h1>Under Fire</h1>
                    <a href={Link}>Login</a>
                </div>
            </div>
        );
    }
}
export default Login