import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Input.css';
export const Input = (props) => {
    const [mes, setMes] = useState("");
    const [key, setKey] = useState("");
    const [encryptedMess, setencryptedMess] = useState('');
    const submit = (e) => {
        e.preventDefault();
        console.log("submit is pressed 1");
        const data = CryptoJS.AES.encrypt(
            JSON.stringify(mes), key
        ).toString();
        setencryptedMess(data);
        console.log(encryptedMess);
    };
    return (
        <>
            <Form className='border p-5 border-black border-2 box1' onSubmit={submit}>
                <Form.Group className="mb-3">
                    <Form.Label>Enter your Message :</Form.Label>
                    <Form.Control type="text" value={mes} placeholder="your message will go here....." required id='mes' onChange={(e) => { setMes(e.target.value) }} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Enter your key :</Form.Label>
                    <Form.Control type="text" value={key} placeholder="AAA-BBB-CCC" id='keyvalue' required onChange={(e) => { setKey(e.target.value) }} />
                </Form.Group>
                <Button className='bg-success' variant="primary" type="submit" onclick={submit}>
                    Submit
                </Button>
            </Form>
            <div className='encrypt1' >
                <h3>Encrypted message :</h3>
                <p id='encrypt'>{encryptedMess}</p>
            </div>
        </>
    );
}