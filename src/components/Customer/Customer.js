import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router'
import { toast } from 'react-toastify'
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button, Col
} from 'reactstrap'
import base_url from '../../api/bootapi'

export default function Customer({ customer, update }) {
    
    const deleteCustomer = (id) => {
        axios.delete(`${base_url}/api/customers/${id}`).then (
            (response) => {
                toast.success("Customer Deleted");
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
        history.push("/customer/updateCustomer");
    }
    return (
        <Col className="my-3">
            <Card>
                <CardImg top width="100%" src="https://cdn.pixabay.com/photo/2017/02/01/10/12/characters-2029373_960_720.png" alt="AdminImg" />
                <CardBody className="text-center">
                    <CardTitle tag="h6">User Name: {customer.username}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">User Id: {customer.id}</CardSubtitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Address: {customer.address}</CardSubtitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Email: {customer.email}</CardSubtitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Mob. Number: {customer.mobileNumber}</CardSubtitle>
                    <Button color="primary" onClick={handleRoute}>Update</Button>
                    <Button className="ms-2" color="danger" onClick={() => {deleteCustomer(customer.id)}}>Delete</Button>
                </CardBody>
            </Card>
        </Col>
    )
}
