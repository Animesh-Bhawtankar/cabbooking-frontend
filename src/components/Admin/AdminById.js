import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Button, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import base_url from '../../api/bootapi';
import Admin from './Admin';

export default function AdminById() {
    useEffect(() => {
        document.title = "Fetch Admin From Id";
    }, []);

    const [username, setUsername] = useState('');
    const fetchAdmin = (e) => {
        console.log(username);
        adminFromServer(username);
        e.preventDefault();
    }
    const [admin, setAdmin] = useState([{
        address: "admin_33_address",
        email: "admin_33@gmail.com",
        id: 17,
        mobileNumber: "3333333333",
        password: "33333",
        username: "admin_33_username"
    }]);
    const adminFromServer = (username) => {
        //console.log(username);
        axios.get(`${base_url}/api/admins/username/${username}`).then(
            (response) => {
                toast.success("Fetching Successfull");
                console.log(response.data);
                setAdmin(response.data);
                //console.log(admin);
            },
            (error) => {
                toast.error("Something Went Wrong");
                console.log(error);
            }
        )
    }
    const deleteAdmin = (id) => {
        setAdmin({
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
            <Form onSubmit={fetchAdmin}>
                <FormGroup className="mx-5">
                    <Label className="my-3">Admin Username</Label>
                    <Input type="text" name="adminId" id="exampleId" placeholder="Enter Admin Username Here" onChange={(event) => {
                        setUsername(event.target.value);
                        console.log(username);
                    }} />
                </FormGroup>
                <Button className="my-3 mx-5" color="info" type="submit">View Admin</Button>
                <Button className="" color="secondary" type="reset" value="reset">Clear All</Button>
            </Form>
            <div>
                <Row sm="3" className="mx-3">
                    {
                        // admin.length > 0 ? admin.map((item) => (
                        //     // <Admin admin={item} update={deleteAdmin} />
                        //     <Admin admin={item}  update={deleteAdmin}/>
                        // )) : <h2>No Admin Found</h2>
                        <Admin admin={admin} update={deleteAdmin} />
                    }
                </Row>
            </div>
        </>
    )
}
