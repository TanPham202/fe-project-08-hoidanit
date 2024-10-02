import './Login.scss';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { loginUser } from '../../services/userService';

const Login = (props) => {
    let history = useHistory();

    const defaultObjectValidInput = {
        isValidValueLogin: true,
        isValidPassword: true
    }

    const [valueLogin, setValueLogin] = useState("");
    const [password, setPassword] = useState("");
    const [objValidInput, setObjValidInput] = useState(defaultObjectValidInput);
    
    const handleCreateNewAccount = () => {
        history.push('/register');
    }

    const handleLogin = async () => {
        setObjValidInput(defaultObjectValidInput);
        if(!valueLogin){
            setObjValidInput({ ...defaultObjectValidInput, isValidValueLogin: false});
            toast.error("Please enter your email address or phone number");
            return;
        }
        if(!password){
            setObjValidInput({ ...defaultObjectValidInput, isValidPassword: false});
            toast.error("Please enter your password");
            return;
        }
        let response = await loginUser(valueLogin, password);
        if(response && +response.EC === 0){
            let data = {
                isAuthenticated: true,
                token: 'fake token'
            }
            sessionStorage.setItem('account', JSON.stringify(data));
            history.push('/users');
            window.location.reload();
        }
        if(response && +response.data.EC !== 0){
            toast.error(response.EM)
        }
    }

    const handlePressEnter = (e) => {
        if(e.charCode === 13 && e.code === 'Enter'){
            handleLogin();
        }
    } 

    useEffect(() => {
        let session = sessionStorage.getItem("account");
        if(session){
            history.push('/');
            window.location.reload();
        }
    }, [])

    return (
        <div className="login-container">
            <div className='container'>
                <div className='row px-3 px-sm-0'>
                    <div className='content-left col-12 d-none col-sm-7 d-sm-block'>
                        <div className='brand'> ABC </div>
                        <div className='detail'> ABC helps you connect and share with the people in your life </div>
                    </div>
                    <div className='content-right col-sm-5 col-12 d-flex flex-column gap-3 py-3'>
                        <div className='brand d-sm-none'> ABC </div>
                        <input type='text' className={objValidInput.isValidValueLogin ? 'form-control' : 'is-invalid form-control'} placeholder='Email address or phone number' 
                            value={valueLogin} onChange={(e) => {setValueLogin(e.target.value)}}
                        />
                        <input type='password' className={objValidInput.isValidPassword ? 'form-control' : 'is-invalid form-control'} placeholder='Password' 
                            value={password} onChange={(e) => {setPassword(e.target.value)}} onKeyPress={(e) => handlePressEnter(e)}
                        />
                        <button className='btn btn-primary' onClick={() => handleLogin()}> Login </button>
                        <span className='text-center'>
                            <a className='forgot-password' href='#'> Forgot your password? </a>
                        </span>
                        <hr />
                        <div className='text-center'>
                            <button className='btn btn-success' onClick={() => handleCreateNewAccount()}> Create new account </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login