import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router'
import { toast } from 'react-toastify'
import {
    Card, CardImg, CardBody,
     CardSubtitle, Button, Col
} from 'reactstrap'
import base_url from '../../api/bootapi'

export default function Cab({ cab, update }) {
    
    const deleteCab = (id) => {
        axios.delete(`${base_url}/api/cabs${id}`).then (
            (response) => {
                toast.success("Cab Deleted");
                update(id);
            },
            (error) => {
                console.log(error);
                toast.error("Something is Wrong");
            }
        )
    }
    const history = useHistory();
    const handleRoute = () => {
        history.push("/cab/updateCab");
    }
    const link = (cab) => {
        cab =  cab.toLowerCase();
        if (cab === 'sedan')
            return "https://images.unsplash.com/photo-1605034647927-1b98d376fd5e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80";
        else if(cab === 'hatchback')
            return "https://images.unsplash.com/photo-1600016326108-40b24ee22cd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80";
        else if (cab === 'suv')
            return "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1259&q=80";
        else if (cab === 'muv')
            return "https://images.unsplash.com/photo-1625776903580-e8af5930c225?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1025&q=80";
        else 
            return "https://images.unsplash.com/photo-1589134723101-5abd32593adf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80";
    }
    return (
        <Col className="my-3">
            <Card>
                <CardImg top width="100%" src={link(cab.carType)} alt="AdminImg" />
                <CardBody className="text-center">
                    
                    
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Cab Type: {cab.carType}</CardSubtitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Per Km Rate: {cab.perKmRate}</CardSubtitle>
                    <Button color="primary" onClick={handleRoute}>Update</Button>
                    <Button className="ms-2" color="danger" onClick={() => {deleteCab(cab.cabId)}}>Delete</Button>
                </CardBody>
            </Card>
        </Col>
    )
}
