import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import base_url from '../../api/bootapi';

export default function UpdateTrip() {
    useEffect(() => {
        document.title = "Update Admin Page";
        //console.log(admin[0])
    }, []);
    const [trip, setTrip] = useState({});
    // const [admin, setAdmin] = useState([{
    //     address: "admin_33_address",
    //     email: "admin_33@gmail.com",
    //     id: 17,
    //     mobileNumber: "3333333333",
    //     password: "33333",
    //     username: "admin_33_username"
    // }]);
    //Form handler Function
    const handleForm = (e) => {
        console.log(trip);
        postDatatoServer(trip);
        e.preventDefault();
    }

    //creating function to post data on server
    const postDatatoServer = (trip) => {
        axios.put(`${base_url}/api/tripbookings`, trip).then(
            (response) => {
                console.log(response);
                toast.success("Admin Updated Successfully");

            },
            (error) => {
                console.log(error);
                toast.error("Something Went Wrong");
            }
        )
    }
    return (
        <>
            <Form onSubmit={handleForm} className="mx-3">
                <FormGroup className="my-3 mx-3">
                    <Label>Enter Trip ID</Label>
                    <Input type="number" placeholder="Enter From Address" onChange={(e) => {
                        setTrip({ ...trip, id: e.target.value });
                    }} />
                </FormGroup>
                <FormGroup className="my-3 mx-3">
                    <Label>From Location</Label>
                    <Input type="text" placeholder="Enter From Address" onChange={(e) => {
                        setTrip({ ...trip, fromLocation: e.target.value });
                    }} />
                </FormGroup>
                <FormGroup className="my-3 mx-3">
                    <Label>To Address</Label>
                    <Input type="text" placeholder="Enter To Address" onChange={(e) => {
                        setTrip({ ...trip, toLocation: e.target.value })
                    }} />
                </FormGroup>
                <FormGroup className="my-3 mx-3">
                    <Label>Enter Start Date and Time</Label>
                    <Input type="datetime" placeholder="Enter Start Date Time" onChange={(e) => {
                        setTrip({ ...trip, fromDateTime: e.target.value });
                    }} />
                </FormGroup>
                <FormGroup className="my-3 mx-3">
                    <Label>Enter Distance In Km</Label>
                    <Input type="number" placeholder="Enter Total Distance" onChange={(e) => {
                        setTrip({ ...trip, distanceInKm: e.target.value });
                    }} />
                </FormGroup>
                <FormGroup className="my-3 mx-3">
                    <Label>Enter Bill Amount in Rupees</Label>
                    <Input type="number" placeholder="Enter Total Distance" onChange={(e) => {
                        setTrip({ ...trip, bill: e.target.value });
                    }} />
                </FormGroup>
                <FormGroup className="my-3 mx-3">
                    <Label>Enter Journey Status (True : Finished, False : Ongoing)</Label>
                    <Input type="select" onChange={(e) => {
                        setTrip({ ...trip, status: e.target.value });
                    }}>
                        <option>true</option>
                        <option>false</option>
                    </Input>
                </FormGroup>
                <Button className="my-3 mx-3" color="info" type="submit">Update Trip</Button>
                <Button className="my-3" color="secondary" type="reset" value="reset">Clear All</Button>
            </Form>

        </>
    )
}
