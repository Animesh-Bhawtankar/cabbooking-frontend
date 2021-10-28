import React, { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import base_url from '../../api/bootapi';
import { toast } from 'react-toastify';

 
export default function UpdateCustomer() {
    useEffect(() => {
        document.title = "Update Customer Page";
        //console.log(customer[0])
    }, []);
    const [customer, setCustomer] = useState({});
    // const [admin, setCustomer] = useState([{
    //     address: "admin_33_address",
    //     email: "admin_33@gmail.com",
    //     id: 17,
    //     mobileNumber: "3333333333",
    //     password: "33333",
    //     username: "admin_33_username"
    // }]);
    //Form handler Function
    const handleForm = (e) => {
        console.log(customer);
        postDatatoServer(customer);
        e.preventDefault();
    }

    //creating function to post data on server
    const postDatatoServer = (customer) => {
        axios.put(`${base_url}/api/customers`, customer).then(
            (response) => {
                console.log(response);
                toast.success("Customer Updated Successfully");

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
                    <Label>Id For which Data Needs Updation</Label>
                    <Input type="text" name="id" id="exampleId" placeholder="Enter Customer Id" onChange={(e) => {
                        setCustomer({ ...customer, id: e.target.value });
                    }} />
                </FormGroup>
                <FormGroup className="my-3 mx-3">
                    <Label>Address</Label>
                    <Input type="text" name="address" id="exampleAddress" placeholder="Enter Your Address" onChange={(e) => {
                        setCustomer({ ...customer, address: e.target.value });
                    }} />
                </FormGroup>
                <FormGroup className="my-3 mx-3">
                    <Label>Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter Your Email" onChange={(e) => {
                        setCustomer({ ...customer ,email: e.target.value });
                    }} />
                </FormGroup>
                <FormGroup className="my-3 mx-3">
                    <Label>Mobile Number</Label>
                    <Input type="number" name="number" id="exampleNumber" placeholder="Enter Your Number" onChange={(e) => {
                        setCustomer({ ...customer, mobileNumber: e.target.value });
                    }} />
                </FormGroup>
                <FormGroup className="my-3 mx-3">
                    <Label>Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="Enter Your Password" onChange={(e) => {
                        setCustomer({ ...customer, password: e.target.value });
                    }} />
                </FormGroup>
                <FormGroup className="my-3 mx-3">
                    <Label>Username</Label>
                    <Input type="text" name="username" id="exampleUsername" placeholder="Enter Your Username" onChange={(e) => {
                        setCustomer({ ...customer, username: e.target.value });
                    }} />
                </FormGroup>
                <Button className="my-3 mx-3" color="info" type="submit">Update Customer</Button>
                
                <Button className="my-3" color="secondary" type="reset" value="reset">Clear All</Button>
            </Form>
            
        </>
    )
}