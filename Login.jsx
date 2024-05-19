import React, { useState } from 'react';
import '../styles/Login.css'; // Assuming you move your CSS here
import Routers from '../routers/Routers';

const Login = () => {
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(e.target.email.value)) {
            setEmailError('Please enter a valid email address.');
            return;
        } else {
            setEmailError('');
        }
        if (e.target.password.value.length < 8) {
            setPasswordError('Password must be at least 8 characters long.');
            return;
        } else {
            setPasswordError('');
        }
        // Redirect or perform login logic here
        console.log("Form submitted successfully");
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} id="form">
                <h1 id="p">Log in  / <a href="/signin">Sign in</a></h1>
                <div className="input-control">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="text" />
                    <div className="error" id="email-error">{emailError}</div>
                </div>
                <div className="input-control">
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" />
                    <div className="error" id="password-error">{passwordError}</div>
                </div>
                <button type="submit" id="submit-btn">Login</button>
            </form>
        </div>
    );
};

export default Login;
