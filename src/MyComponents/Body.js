import React from 'react';
import {Tab,Tabs} from 'react-bootstrap';
import {Input} from './Input';
import {Output} from './Output';

function Body() {
  return (
    <>
      <Tabs bg="dark" data-bs-theme="dark"
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="Encrypt" title="Encrypt Message" >
        <h2 className='text-center' >You can encrypt now</h2>
        <Input/>
      </Tab>
      <Tab eventKey="Decrypt" title="Decrypt Code">
      <h2 className='text-center'>You can decrypt now</h2>
      <Output/>
      </Tab>
    </Tabs>
    </>
  );
}


export default Body;