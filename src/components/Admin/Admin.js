import axios from 'axios'
import React from 'react'
import { toast } from 'react-toastify'
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button, Col
} from 'reactstrap'
import base_url from '../../api/bootapi'

export default function Admin({ admin, update }) {
    
    const deleteAdmin = (id) => {
        axios.delete(`${base_url}/api/admins/${id}`).then (
            (response) => {
                toast.success("Admin Deleted");
                update(id);
            },
            (error) => {
                console.log(error);
                toast.error("Something is Wrong");
            }
        )
    }
    return (
        <Col className="my-3">
            <Card>
                <CardImg top width="100%" src="https://i.pinimg.com/564x/94/09/7e/94097e458fbb22184941be57aaab2c8f.jpg" alt="AdminImg" />
                <CardBody className="text-center">
                    <CardTitle tag="h6">User Name: {admin.username}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">User Id: {admin.id}</CardSubtitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Address: {admin.address}</CardSubtitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Email: {admin.email}</CardSubtitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Mob. Number: {admin.mobileNumber}</CardSubtitle>
                    <Button color="primary">Update</Button>
                    <Button className="ms-2" color="danger" onClick={() => {deleteAdmin(admin.id)}}>Delete</Button>
                </CardBody>
            </Card>
        </Col>
    )
}
