import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Button, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import base_url from '../../api/bootapi';
import Customer from './Customer';

 
export default function CustomerByEmail() {
    useEffect(() => {
        document.title = "Fetch Customer By Email";
    }, []);

    const [email, setEmail] = useState('');
    const fetchCustomer = (e) => {
        console.log(email);
        customerFromServer(email);
        e.preventDefault();
    }
    const [customer, setCustomer] = useState([{
        address: "admin_33_address",
        email: "admin_33@gmail.com",
        id: 17,
        mobileNumber: "3333333333",
        password: "33333",
        username: "admin_33_username"
    }]);
    const customerFromServer = (email) => {
        //console.log(username);
        axios.get(`${base_url}/api/customers/email/${email}`).then(
            (response) => {
                toast.success("Fetching Successfull");
                console.log(response.data);
                setCustomer(response.data);
                //console.log(admin);
            },
            (error) => {
                toast.error("Something Went Wrong");
                console.log(error);
            }
        )
    }
    const deleteCustomer = (Id) => {
        setCustomer({
            address: " ",
            email: " ",
            id: null,
            mobileNumber: " ",
            password: " ",
            username: " "
        });
    }
    return (
        <>
            <Form onSubmit={fetchCustomer}>
                <FormGroup className="mx-5">
                    <Label className="my-3">Customer Email</Label>
                    <Input type="email" name="email" id="exampleId" placeholder="Enter Customer Email Here" onChange={(event) => {
                        setEmail(event.target.value);
                        console.log(email);
                    }} />
                </FormGroup>
                <Button className="my-3 mx-5" color="info" type="submit">View Customer</Button>
                <Button className="" color="secondary" type="reset" value="reset">Clear All</Button>
            </Form>
            <div>
                <Row sm="3" className="mx-3">
                    {
                        // admin.length > 0 ? admin.map((item) => (
                        //     // <Admin admin={item} update={deleteAdmin} />
                        //     <Admin admin={item}  update={deleteAdmin}/>
                        // )) : <h2>No Admin Found</h2>
                        <Customer customer={customer} update={deleteCustomer} />
                    }
                </Row>
            </div>
        </>
    )
}