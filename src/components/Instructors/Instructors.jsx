import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import { Card } from 'react-bootstrap';

const Instructors = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2>Instructors page</h2>
            <div>
                
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Name</Card.Title>
                        <Card.Text>
                            Email
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Instructors;