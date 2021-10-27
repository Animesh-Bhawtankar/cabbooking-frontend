import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import base_url from '../../api/bootapi';

export default function AddTrip() {
    useEffect(() => {
        document.title = "Add A Trip"
    }, [])
    const [linkvar, setLinkvar] = useState({});
    const [trip, setTrip] = useState({});

    const handleForm = (e) => {
        console.log(linkvar);
        console.log(trip);
        e.preventDefault();
        postDataToServer(trip, linkvar);
    }
    const postDataToServer = (trip, linkvar) => {
        axios.post(`${base_url}/api/tripbookings/${linkvar.customerId}/${linkvar.cabId}/${linkvar.driverId}`,trip).then(
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
            <Form onSubmit={handleForm} className="mx-3">
                <FormGroup className="my-3 mx-3">
                    <Label>Enter Cab Id</Label>
                    <Input type="number" placeholder="Enter Id of Cab" onChange={(e) => {
                        setLinkvar({...linkvar, cabId: e.target.value});
                    }} />
                </FormGroup>
                <FormGroup className="my-3 mx-3">
                    <Label>Enter Driver Id</Label>
                    <Input type="number" placeholder="Enter Id of Driver" onChange={(e) => {
                        setLinkvar({...linkvar, driverId: e.target.value});
                    }} />
                </FormGroup>
                <FormGroup className="my-3 mx-3">
                    <Label>Enter Customer Id</Label>
                    <Input type="number" placeholder="Enter Id Of Customer" onChange={(e) => {
                        setLinkvar({...linkvar, customerId: e.target.value});
                    }} />
                </FormGroup>
                <FormGroup className="my-3 mx-3">
                    <Label>From Location</Label>
                    <Input type="text" placeholder="Enter From Address" onChange={(e) => {
                        setTrip({...trip, fromLocation: e.target.value});
                    }} />
                </FormGroup>
                <FormGroup className="my-3 mx-3">
                    <Label>To Address</Label>
                    <Input type="text" placeholder="Enter To Address" onChange={(e) => {
                        setTrip({...trip, toLocation: e.target.value})
                    }} />
                </FormGroup>
                <FormGroup className="my-3 mx-3">
                    <Label>Enter Start Date and Time</Label>
                    <Input type="datetime" placeholder="Enter Start Date Time" onChange={(e) => {
                        setTrip({...trip, fromDateTime: e.target.value});
                    }} />
                </FormGroup>
                <FormGroup className="my-3 mx-3">
                    <Label>Enter Distance In Km</Label>
                    <Input type="number" placeholder="Enter Total Distance" onChange={(e) => {
                        setTrip({...trip, distanceInKm: e.target.value});
                    }} />
                </FormGroup>
                <FormGroup className="my-3 mx-3">
                    <Label>Enter Journey Status (True : Finished, False : Ongoing)</Label>
                    <Input type="select" onChange={(e) => {
                        setTrip({...trip, status: e.target.value});
                    }}>
                        <option>true</option>
                        <option>false</option>
                    </Input>
                </FormGroup>
                <Button className="my-3 mx-3" color="info" type="submit">Add Trip</Button>
                <Button className="my-3" color="secondary" type="reset" value="reset">Clear All</Button>
            </Form>

        </>
    )
}
