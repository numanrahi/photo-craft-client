import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Login = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        console.log(email, password);

        // loginUser(email, password)
        //     .then(() => {
        //         toast("Welcome Back !!");
        //         navigate(from, { replace: true });
        //     })
        //     .catch((error) => {
        //         toast.error(error.message);
        //     });
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
                            <Form.Control type="password" {...register('password')} required placeholder="Password" />
                        </Form.Group>
                        <div className='text-center'>Dont have an account? Please <Link to="/register">Register</Link></div>
                        <br />
                        <Button className="w-100 bg-color my-3" type="submit">
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