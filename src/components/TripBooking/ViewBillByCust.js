import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Button, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import base_url from '../../api/bootapi';
import ViewTrip from './ViewTrip';

export default function ViewBillByCust() {
    useEffect(() => {
        document.title = "Fetch Trip from Customer Id";
    }, []);

    const [custid, setCustid] = useState('');
    const fetchTrip = (e) => {
        console.log(custid);
        tripFromServer(custid);
        e.preventDefault();
    }
    const [trip, setTrip] = useState([{}]);
    const [amount, setAmount] = useState('')
    const tripFromServer = (custid) => {
        //console.log(username);
        axios.get(`${base_url}/api/tripbookings/customer/${custid}`).then(
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
        axios.get(`${base_url}/api/tripbookings/calculate/${custid}`).then(
            (response) => {
                toast.success("Fetching Successfull");
                console.log(response.data);
                setAmount(response.data);
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
                    <Label className="my-3">Enter Customer Id</Label>
                    <Input type="number" name="adminId" id="exampleId" placeholder="Enter Customer ID Here" onChange={(event) => {
                        setCustid(event.target.value);
                        console.log(custid);
                    }} />
                </FormGroup>
                <Button className="my-3 mx-3" color="info" type="submit">View Trip Details</Button>
                <Button className="" color="secondary" type="reset" value="reset">Clear All</Button>
            </Form>
            <h3 className="mx-3 p-3 mb-2 bg-warning text-dark">The Total Amount By This Customer Is: {amount}</h3>
            <Row sm="3" className="mx-3">
                {
                    trip.length > 0 ? trip.map((item) => (
                        <ViewTrip trip={item} update={deleteTrip} />
                    )) : <h2>No Trip Data Found</h2>
                }
            </Row>
        </>
    )
}