import React, { useState } from 'react';
import './Login.css';
import Userfront from "@userfront/core";

import logo_icon from '../Assets/Logo.png';
import eyeOpen from '../Assets/EyeOpen.png';
import eyeClose from '../Assets/EyeClose.png';

Userfront.init("8nwyy85n");

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);

    const handleLogin = async () => {
        if (!email.trim() || !password.trim()) {
            alert("Email and password cannot be blank.");
            return;
        }
    
        try {
            const response = await Userfront.login({
                method: "password",
                email: email,
                password: password,
            });
            // Check response here for any error indications
            if (response.error) {
                alert("Incorrect email or password."); // Update with a more user-friendly message
            } else {
                // Redirect or perform actions after successful login
            }
        } catch (error) {
            console.error("Login error:", error);
            // Handle other types of login failures
        }
    };
    return (
        <div className='login-container'>
            <div className="logo">
                <img src={logo_icon} alt="Logo" />
            </div>
            <div className="em-pass">               
                <div className="input">
                    <input 
                        type="email" 
                        placeholder="Enter Email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="input">
                    <input 
                        type={visible ? "text" : "password"}
                        value={password} 
                        id="password" 
                        placeholder="Enter Password" 
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <div className = "eyecon" onClick={() => setVisible(!visible)}>
                        <span>
                            {visible ? <img src={eyeOpen} alt="Show Password" /> 
                                     : <img src={eyeClose} alt="Hide Password" />}
                        </span>
                    </div>
                </div>
            </div>

            <div className="login-button" onClick={handleLogin}>
                <div className="login-button-text">Login</div>
            </div>
        </div>
    );
}

export default Login;
