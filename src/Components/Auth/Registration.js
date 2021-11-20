import React, { useState } from 'react';
import Navbar from '../Navbar';
import "../../styles/Form.css";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../Redux/Actions/userActions';

const Registration = () => {
    const [userName, setUserName] = useState("")
    const [userEmail, userSetEmail] = useState("")
    const [userPassword, setUserPassword] = useState("") 
    const [userConfirmPass, setUserConfirmPass] = useState("")

    const dispatch = useDispatch()
    const handleRegister = e => {
        e.preventDefault()
        if(userPassword !== userConfirmPass){
            alert("Passwords not matched")
        }else{
            const user = {
                username: userName,
                email: userEmail,
                password: userPassword
            }
            dispatch(registerUser(user))
        }
    }
    return (
        <div className="registration-section">
            <div className="custom-container">
                <Navbar />
            </div>
            <div className="registration-form custom-container d-flex align-items-center justify-content-center">
                <div className="registration-form-data">
                    <div className="registration-form-header text-center p-1">
                        <h2>Register Your Account</h2>
                    </div>
                    <form>
                        <div>
                            <input type="text" placeholder="your name" defaultValue="name" onChange={(e) => setUserName(e.target.value)} required/>
                        </div>
                        <div>
                            <input type="email" placeholder="your email" defaultValue="email" onChange={(e) => userSetEmail(e.target.value)} required/>
                        </div> 
                        <div>
                            <input type="password" placeholder="your password" defaultValue="password" onChange={(e) => setUserPassword(e.target.value)} required/>
                        </div>
                        <div>
                            <input type="password" placeholder="confirm password" defaultValue="confirmPassword" onChange={(e) => setUserConfirmPass(e.target.value)} required/>
                        </div>
                        <div className="text-center">
                            <button onClick={handleRegister}>Submit</button>
                        </div>
                        <div className="text-center mt-3">
                            <p>Already registered? <Link to="/login">Go To Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;