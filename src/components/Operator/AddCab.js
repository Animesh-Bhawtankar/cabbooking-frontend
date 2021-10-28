import React, { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import base_url from '../../api/bootapi';
import { toast } from 'react-toastify';

export default function AddCab() {
    useEffect(() => {
        document.title = "Operator Page";
    }, []);
    const [cab, setCab] = useState({});
    //Form handler Function
    const handleForm = (e) => {
        console.log(cab);
        postDatatoServer(cab);
        e.preventDefault();
    }

    //creating function to post data on server
    const postDatatoServer = (cab) => {
        axios.post(`${base_url}/api/cabs`, cab).then(
            (response) => {
                console.log(response);
                toast.success("Cab Added Successfully");
            },
            (error) => {
                console.log(error);
                toast.error("Server Down");
            }
        )
    }

    return (
        <>
        <Form onSubmit={handleForm}>

              <FormGroup className="my-3 mx-3">
                <Label>Enter Car Type</Label>
                <Input type="text" placeholder="Car Type" onChange={(e) => {
                    setCab({...cab, carType: e.target.value});
                }}/>
            </FormGroup>

            <FormGroup className="my-3 mx-3">
                <Label>Enter Per Km Rate</Label>
                <Input type="number" placeholder="Enter Rate" onChange={(e) => {
                    setCab({...cab, perKmRate: e.target.value});
                }}/>
            </FormGroup>

            
            <Button className="my-3 mx-3" color="info" type="submit">Add Cab</Button>
            <Button className="my-3" color="secondary" type="reset" value="reset">Clear All</Button>
        </Form>
        </>
    )
}