import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';


// const { register, handleSubmit, watch, formState: { errors } } = useForm();

const Register = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='display-5 text-center'>Register your account</div>
            <hr  className='w-50 mx-auto text-secondary'/>
            <Footer></Footer>
        </div>
    );
};

export default Register;