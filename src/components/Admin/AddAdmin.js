import React, { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import base_url from '../../api/bootapi';
import { toast } from 'react-toastify';


export default function AddAdmin() {
    useEffect(() => {
        document.title = "Add Admin Page";
    }, []);
    const [admin, setAdmin] = useState({});
    //Form handler Function
    const handleForm = (e) => {
        //console.log(admin);
        postDatatoServer(admin);
        e.preventDefault();
    }

    //creating function to post data on server
    const postDatatoServer = (admin) => {
        axios.post(`${base_url}/api/admins`, admin).then(
            (response) => {
                console.log(response);
                console.log("Success");
                toast.success("Admin Added Successfully");

            },
            (error) => {
                console.log(error);
                toast.error("Something Went Wrong");
            }
        )
    }

    return (
        <>
            <Form onSubmit={handleForm}>
                <FormGroup className="my-3 mx-3">
                    <Label>Address</Label>
                    <Input type="text" name="address" id="exampleAddress" placeholder="Enter Your Address" onChange={(e) => {
                        setAdmin({ ...admin, address: e.target.value });
                    }} />
                </FormGroup>
                <FormGroup className="my-3 mx-3">
                    <Label>Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter Your Email" onChange={(e) => {
                        setAdmin({ ...admin, email: e.target.value });
                    }} />
                </FormGroup>
                <FormGroup className="my-3 mx-3">
                    <Label>Mobile Number</Label>
                    <Input type="number" name="number" id="exampleNumber" placeholder="Enter Your Number" onChange={(e) => {
                        setAdmin({ ...admin, mobileNumber: e.target.value });
                    }} />
                </FormGroup>
                <FormGroup className="my-3 mx-3">
                    <Label>Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="Enter Your Password" onChange={(e) => {
                        setAdmin({ ...admin, password: e.target.value });
                    }} />
                </FormGroup>
                <FormGroup className="my-3 mx-3">
                    <Label>Username</Label>
                    <Input type="text" name="username" id="exampleUsername" placeholder="Enter Your Username" onChange={(e) => {
                        setAdmin({ ...admin, username: e.target.value });
                    }} />
                </FormGroup>
                <Button className="my-3 mx-3" color="info" type="submit">Add Admin</Button>
                <Button className="my-3" color="secondary" type="reset" value="reset">Clear All</Button>
            </Form>
            
        </>
    )
}
