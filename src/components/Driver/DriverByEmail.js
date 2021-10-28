import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Button, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import base_url from '../../api/bootapi';
import Driver from './Driver';

export default function DriverByEmail() {
    useEffect(() => {
        document.title = "Fetch Driver From Email";
    }, []);

    const [email, setEmail] = useState('');
    const fetchDriver = (e) => {
        console.log(email);
        driverFromServer(email);
        e.preventDefault();
    }
    const [driver, setDriver] = useState([{
        address: "admin_33_address",
        email: "admin_33@gmail.com",
        id: 17,
        mobileNumber: "3333333333",
        password: "33333",
        username: "admin_33_username"
    }]);
    const driverFromServer = (email) => {
        //console.log(username);
        axios.get(`${base_url}/api/drivers/email/${email}`).then(
            (response) => {
               toast.success("Fetching Successfull");
                // console.log(response.data);
                setDriver(response.data);
                //console.log(admin);
            },
            (error) => {
                toast.error("Something Went Wrong");
                // console.log(error);
            }
        )
    }
    const deleteDriver = (email) => {
        setDriver({
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
            <Form onSubmit={fetchDriver}>
                <FormGroup className="mx-5">
                    <Label className="my-3">Driver Email</Label>
                    <Input type="text" name="email" id="exampleEmail" placeholder="Enter Driver Email Here" onChange={(event) => {
                        setEmail(event.target.value);
                        console.log(email);
                    }} />
                </FormGroup>
                <Button className="my-3 mx-5" color="info" type="submit">View Driver</Button>
                <Button className="" color="secondary" type="reset" value="reset">Clear All</Button>
            </Form>
            <div>
                <Row sm="3" className="mx-3">
                    {
                        // admin.length > 0 ? admin.map((item) => (
                        //     // <Admin admin={item} update={deleteAdmin} />
                        //     <Admin admin={item}  update={deleteAdmin}/>
                        // )) : <h2>No Admin Found</h2>
                        <Driver driver={driver} update={deleteDriver} />
                    }
                </Row>
            </div>
        </>
    )
}