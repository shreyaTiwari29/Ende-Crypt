import React, {useState} from 'react';
import CryptoJS from 'crypto-js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export const Output =(props)=>{
    const [mes,setMes]=useState("");
    const [key,setKey]=useState("");
    const[decryptedMess,setdecryptedMess]=useState('');
    const submit=(e)=>{
        e.preventDefault();
        try{
            const bytes=CryptoJS.AES.decrypt(mes,key);
            const data=JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            setdecryptedMess(data);
        }
        catch(error){
            alert(error&&error.message?error.message:"error occurred:");
            setMes('');
            setKey('');
            setdecryptedMess('error');
        }
    }
    return(
        <>
        <Form className='border p-5 border-black border-2' onSubmit={submit}>
        <Form.Group className="mb-3">
            <Form.Label>Enter your Encrypted Message :</Form.Label>
            <Form.Control type="text" value={mes} placeholder="your encrypted message will go here....." required id='mes' onChange={(e)=>{setMes(e.target.value)}} />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Enter your key :</Form.Label>
            <Form.Control type="text" value={key} placeholder="AAA-BBB-CCC" id='key' required onChange={(e)=>{setKey(e.target.value)}} />
        </Form.Group>
        <Button className='bg-warning' variant="primary" type="submit">
            Submit
        </Button>
        </Form>
        <div>
            <h3>Decrypted message :</h3>
            <p id='decrypt'>{decryptedMess}</p>
        </div>
        </>
    );
}