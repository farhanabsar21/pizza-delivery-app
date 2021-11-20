import React, { useEffect, useState }  from 'react';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../Redux/Actions/userActions';

const Login = () => {
    const [userEmail, userSetEmail] = useState("")
    const [userPassword, setUserPassword] = useState("") 
    const dispatch = useDispatch()

    const handleLogin = e => {
        e.preventDefault()
        const user = {
            email: userEmail,
            password: userPassword 
        }
        dispatch(loginUser(user))
    } 
    useEffect(() => {
        if(localStorage.getItem("currentUser")){
            window.location.href = "/"
        }
    })
    return (
        <div className="registration-section">
            <div className="custom-container">
                <Navbar />
            </div>
            <div className="registration-form custom-container d-flex align-items-center justify-content-center">
                <div className="registration-form-data">
                    <div className="registration-form-header text-center p-1">
                        <h2>Login To Your Account</h2>
                    </div>
                    <form>
                        <div>
                            <input type="email" placeholder="your email" defaultValue="email" onChange={(e) => userSetEmail(e.target.value)} required/>
                        </div> 
                        <div>
                            <input type="password" placeholder="your password" defaultValue="password" onChange={(e) => setUserPassword(e.target.value)} required/>
                        </div>
                        <div className="text-center">
                            <button onClick={handleLogin}>Submit</button>
                        </div>
                        <div className="text-center mt-3">
                            <p>Haven't any account yet? <Link to="/login">Register Here</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;