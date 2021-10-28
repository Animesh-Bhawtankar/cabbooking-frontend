import React, { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import base_url from '../../api/bootapi';
import { toast } from 'react-toastify';
 

export default function UpdateDriver() {
    useEffect(() => {
        document.title = "Update Driver Page";
      
    }, []);
    const [driver, setDriver] = useState({});
  
    //Form handler Function
    const handleForm = (e) => {
        console.log(driver);
        postDatatoServer(driver);
        e.preventDefault();
    }

    //creating function to post data on server
    const postDatatoServer = (driver) => {
        axios.post(`${base_url}/api/drivers`, driver).then(
            (response) => {
                console.log(response);
                toast.success("Driver Updated Successfully");

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
                <Input type="text" name="id" id="exampleId" placeholder="Enter Driver Id" onChange={(e) => {
                setDriver({ ...driver, id: e.target.value });
                }}/>
                </FormGroup>

              <FormGroup className="my-3 mx-3">
                <Label>Username</Label>
                <Input type="text" name="username" id="exampleUsername" placeholder="Enter Your Username" onChange={(e) => {
                    setDriver({...driver, username: e.target.value});
                }}/>
            </FormGroup>

            <FormGroup className="my-3 mx-3">
                <Label>Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="Enter Your Password" onChange={(e) => {
                    setDriver({...driver, password: e.target.value});
                }}/>
            </FormGroup>

            <FormGroup className="my-3 mx-3">
                <Label>Address</Label>
                <Input type="text" name="address" id="exampleAddress" placeholder="Enter Your Address" onChange={(e) => {
                    setDriver({...driver, address: e.target.value});
                }}/>
            </FormGroup>

            <FormGroup className="my-3 mx-3">
                <Label>Mobile Number</Label>
                <Input type="number" name="number" id="exampleNumber" placeholder="Enter Your Number" onChange={(e) => {
                    setDriver({...driver, mobileNumber: e.target.value});
                }}/>
            </FormGroup>

            <FormGroup className="my-3 mx-3">
                <Label>Email</Label>
                <Input type="text" name="email" id="exampleEmail" placeholder="Enter Your Email" onChange={(e) => {
                    setDriver({...driver, email: e.target.value});
                }}/>
            </FormGroup>

            <FormGroup className="my-3 mx-3">
                <Label>Rating</Label>
                <Input type="number" name="rating" id="exampleRating" placeholder="Enter Driver Rating" onChange={(e) => {
                    setDriver({...driver, rating: e.target.value});
                }}/>
            </FormGroup>

            <FormGroup className="my-3 mx-3">
                <Label>License Number</Label>
                <Input type="number" name="licenseNumber" id="examplelicenseNumber" placeholder="Enter Your License Numbere" onChange={(e) => {
                    setDriver({...driver, licenseNumber: e.target.value});
                }}/>
            </FormGroup>
           
            <Button className="my-3 mx-3" color="info" type="submit">Update Driver</Button>
            <Button className="my-3" color="secondary" type="reset" value="reset">Clear All</Button>
        </Form>
        </>
    )
}

    