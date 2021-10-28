import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router'
import { toast } from 'react-toastify'
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button, Col
} from 'reactstrap'
import base_url from '../../api/bootapi'
 
export default function Operator({ operator, update }) {
    
    const deleteOperator = (id) => {
        axios.delete(`${base_url}/api/operators/${id}`).then (
            (response) => {
                toast.success("Operator Deleted");
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
        history.push("/operator/updateOperator");
    }
    return (
        <Col className="my-3">
            <Card>
                <CardImg top width="100%" src="https://i.pinimg.com/564x/94/09/7e/94097e458fbb22184941be57aaab2c8f.jpg" alt="AdminImg" />
                <CardBody className="text-center">
                    <CardTitle tag="h6">User Name: {operator.username}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">User Id: {operator.id}</CardSubtitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Address: {operator.address}</CardSubtitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Email: {operator.email}</CardSubtitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Mob. Number: {operator.mobileNumber}</CardSubtitle>
                    <Button color="primary" onClick={handleRoute}>Update</Button>
                    <Button className="ms-2" color="danger" onClick={() => {deleteOperator(operator.id)}}>Delete</Button>
                </CardBody>
            </Card>
        </Col>
    )
}