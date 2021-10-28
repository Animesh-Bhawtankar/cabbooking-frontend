import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Button, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import base_url from '../../api/bootapi';
import ViewTrip from './ViewTrip';

export default function ViewTripById() {
    useEffect(() => {
        document.title = "Fetch Admin From Id";
    }, []);

    const [tripid, setTripid] = useState('');
    const fetchTrip = (e) => {
        console.log(tripid);
        tripFromServer(tripid);
        e.preventDefault();
    }
    const [trip, setTrip] = useState([{
        address: "admin_33_address",
        email: "admin_33@gmail.com",
        id: 17,
        mobileNumber: "3333333333",
        password: "33333",
        username: "admin_33_username"
    }]);
    const tripFromServer = (tripid) => {
        //console.log(username);
        axios.get(`${base_url}/api/tripbookings/${tripid}`).then(
            (response) => {
                toast.success("Fetching Successfull");
                console.log(response.data);
                setTrip(response.data);
                //console.log(admin);
            },
            (error) => {
                toast.error("Something Went Wrong");
                console.log(error);
            }
        )
    }
    const deleteTrip = (id) => {
        setTrip({
            id: null,
            bill: " ",
            distanceInKm: " ",
            fromDateTime: " ",
            fromLocation: " ",
            status: " ",
            toDateTime: " ",
            toLocation: " "
        });
    }
    return (
        <>
            <Form onSubmit={fetchTrip}>
                <FormGroup className="mx-3">
                    <Label className="my-3">Enter Trip Id</Label>
                    <Input type="number" name="adminId" id="exampleId" placeholder="Enter Trip ID Here" onChange={(event) => {
                        setTripid(event.target.value);
                        console.log(tripid);
                    }} />
                </FormGroup>
                <Button className="my-3 mx-3" color="info" type="submit">View Trip Details</Button>
                <Button className="" color="secondary" type="reset" value="reset">Clear All</Button>
            </Form>
            <Row sm="3" className="mx-3">
                {
                    <ViewTrip trip={trip} update={deleteTrip} />
                }
            </Row>
        </>
    )
}