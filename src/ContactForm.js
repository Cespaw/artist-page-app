import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';

function ContactForm({ name }) {

    return (
        <div className='form'>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        autoFocus
                    />
                </Form.Group>
                <Form.Group
                    className="mb-1"
                    controlId="exampleForm.ControlTextarea1"
                >
                    <Form.Label>Title</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        type="textarea"
                        rows={1} 
                        placeholder="I am interested in buying your painting"/>
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea2"
                >
                    <Form.Label>Your message</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={3} 
                        />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Send
                </Button>
            </Form>
        </div>
    );
}

export default ContactForm;