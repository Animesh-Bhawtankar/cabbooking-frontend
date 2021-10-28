import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router'
import { toast } from 'react-toastify'
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button, Col
} from 'reactstrap'
import base_url from '../../api/bootapi'
// import deleteDriver from './ViewDriver'
export default function Driver({ driver, update }) {
    
    const deleteDriver = (id) => {
        axios.delete(`${base_url}/api/drivers/${id}`).then (
            (response) => {
                toast.success("Driver Deleted");
                update(id);
            },
            (error) => {
                console.log(error);
               // toast.error("Something is Wrong");
            }
        )
    }
    const history = useHistory();
    const handleRoute = () => {
        history.push("/driver/updateDriver");
    }
    return (
        <Col className="my-3">
            <Card>
                <CardImg top width="100%" src="https://i.pinimg.com/564x/94/09/7e/94097e458fbb22184941be57aaab2c8f.jpg"alt="driver"/>
                <CardBody className="text-center">
                    <CardTitle tag="h6">Driver Name: {Driver.username}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Driver Id: {driver.id}</CardSubtitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Address: {driver.address}</CardSubtitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Email: {driver.email}</CardSubtitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Mob. Number: {driver.mobileNumber}</CardSubtitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Ratings: {driver.rating}</CardSubtitle>
                    <Button color="primary" onClick={handleRoute}>Update</Button>
                    <Button className="ms-2" color="danger" onClick={() => {deleteDriver(driver.id)}}>Delete</Button>
                </CardBody>
            </Card>
        </Col>
    )
}