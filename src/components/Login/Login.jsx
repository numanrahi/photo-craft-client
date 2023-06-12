import React, { useContext, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import './Login.css'

const Login = () => {

    const { register, handleSubmit } = useForm();
    const { googleSignIn, signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"

    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        console.log(email, password);

        signIn(email, password)
            .then(() => {
                toast("Welcome Back !!");
                navigate(from, { replace: true });
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                const saveUser = { name: loggedUser.displayName, email: loggedUser.email }
                // TODO: Connect to the server
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        console.log('from', from);
                        navigate(from, { replace: true } || '/')
                    })
                navigate(from, { replace: true } || '/')
            })
    }


    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    return (
        <div>
            <Navbar></Navbar>
            <div className='my-3'>
                <div className='display-5 text-center'>Login Your Account</div>
                <hr className='w-50 mx-auto text-secondary' />
                <div className='d-flex align-items-center'>
                    <img className=' w-50' src="https://media.istockphoto.com/id/1456365976/vector/two-factor-authentication-line-vector-illustration.jpg?s=612x612&w=0&k=20&c=rTw0hwGBCWabdlfptPEtUBn4_2iW2vAlgxFeFNYmpMk=" alt="" />
                    <Form
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-50 mx-auto pe-5">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" {...register('email')} required placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <div className="password-input-container">
                                <Form.Control
                                    type={showPassword ? 'text' : 'password'}
                                    {...register('password')}
                                    required
                                    placeholder="Password"
                                />
                                <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                                    {showPassword ? (
                                        <FiEyeOff className="password-icon" />
                                    ) : (
                                        <FiEye className="password-icon" />
                                    )}
                                </span>
                            </div>
                        </Form.Group>

                        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" {...register('password')} required placeholder="Password" />
                        </Form.Group> */}
                        <br />
                        <Button className="w-100 bg-color my-3" type="submit">
                            Login
                        </Button>
                        <div className='text-center'>--------- or ----------</div>
                        <Button onClick={handleGoogleSignIn} className="w-100 bg-color my-3" type="submit">
                            Login with Google
                        </Button>
                        <div className='text-center'>Dont have an account? Please <Link to="/register" className='text-danger text-decoration-none'>Register</Link></div>
                    </Form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;