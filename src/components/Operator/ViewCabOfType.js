import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Button, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import base_url from '../../api/bootapi';
import Cab from './Cab';

export default function ViewCabOfType() {
    useEffect(() => {
        document.title = "View Cabs By Type";
    })

    const [cab, setCab] = useState({});
    const [cabid, setCabid] = useState('');

    const fetchCabs= (e) => {
        e.preventDefault();
        fetchFromServer(cabid);
    }
    const fetchFromServer = (id) => {
        console.log(id);
        axios.get(`${base_url}/api/cabs/type/${id}`).then (
            (response) => {
                toast.success("Fetching Successful")
                setCab(response.data);
            },
            (error) => {
                toast.error("Server Down");
                console.log(error);
            }
        )
    }
    const deleteCab = () => {
        setCab({
            id: null,
            carType: " ",
            perKmRate: null 
        })
    }
    return (
        <>
            <Form onSubmit={fetchCabs}>
                <FormGroup className="my-3 mx-3">
                    <Label>Enter Cab Type</Label>
                    <Input type="select" onChange={(e) => {
                        setCabid( e.target.value );
                    }}>
                        <option>SUV</option>
                        <option>SEDAN</option>
                        <option>MUV</option>
                        <option>HATCHBACK</option>
                        <option>SPORTS</option>
                    </Input>
                </FormGroup>
                <Button className="my-3 mx-5" color="info" type="submit">View Total Cabs Present</Button>
                <Button className="" color="secondary" type="reset" value="reset">Clear All</Button>
            </Form>
            <div>
            <Row sm="3" className="mx-2">
                {
                    cab.length > 0 ? cab.map((item) => (
                        <Cab  cab={item} update={deleteCab}/>
                    )) : <h2>No Cab Found</h2>
                } 
            </Row>
            </div>
        </>
    )
}
