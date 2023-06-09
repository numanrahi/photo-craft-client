import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import { Link } from 'react-router-dom';
// import { Button } from 'bootstrap';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='my-3'>
                <div className='display-5 text-center'>Login Your Account</div>
                <div className='d-flex align-items-center'>
                    <img className=' w-50' src="https://media.istockphoto.com/id/1456365976/vector/two-factor-authentication-line-vector-illustration.jpg?s=612x612&w=0&k=20&c=rTw0hwGBCWabdlfptPEtUBn4_2iW2vAlgxFeFNYmpMk=" alt="" />
                    <Form
                        // onSubmit={handleLogin} 
                        className="w-50 mx-auto pe-5">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" />
                        </Form.Group>
                        <div>Dont have an account? Please <Link to="/register">Register</Link></div>
                        <br />
                        <Button className="w-100 my-3" variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;