import './Register.scss';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Register = (props) => {
    let history = useHistory();
    
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleLogin = () => {
        history.push('/login');
    }

    const isValidInputs = () => {
        if(!email){
            toast.error("Email is required");
            return false;
        }
        if(!phone){
            toast.error("Phone is required");
            return false;
        }
        if(!password){
            toast.error("Password is required");
            return false;
        }
        if(password != confirmPassword){
            toast.error("Your password is not the same");
            return false;
        }
        let regx = /^\S+@\S+\.\S+$/;
        if(!regx.test(email)){
            toast.error("Please enter a valid email address");
            return false;
        }
        return true;
    }

    const handleRegister = () => {
        let check = isValidInputs();
        let userData = { email, phone, username, password };
    }
    useEffect(() => {
    }, [])

    return (
        <div className="register-container">
            <div className='container'>
                <div className='row px-3 px-sm-0'>
                    <div className='content-left col-12 d-none col-sm-7 d-sm-block'>
                        <div className='brand'> ABC </div>
                        <div className='detail'> ABC helps you connect and share with the people in your life </div>
                    </div>
                    <div className='content-right col-sm-5 col-12 d-flex flex-column gap-3 py-3'>
                        <div className='brand d-sm-none'> ABC </div>
                        <div className='form-group'>
                            <label> Email: </label>
                            <input type='text' className='form-control' placeholder='Email' 
                                value={email} onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label> Phone number: </label>
                            <input type='text' className='form-control' placeholder='Phone number' 
                                value={phone} onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label> Username: </label>
                            <input type='text' className='form-control' placeholder='Username' 
                                value={username} onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label> Password: </label>
                            <input type='password' className='form-control' placeholder='Password' 
                                value={password} onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label> Re-enter password: </label>
                            <input type='password' className='form-control' placeholder='Re-enter password' 
                                value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <button className='btn btn-primary' type="button" onClick={() => handleRegister()}> Register </button>
                        <hr />
                        <div className='text-center'>
                            <button className='btn btn-success' onClick={() => handleLogin()}> Already've an account. Login </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register