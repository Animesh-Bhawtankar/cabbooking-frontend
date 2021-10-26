import React from 'react'
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button, Col
} from 'reactstrap'

export default function Admin({ admin }) {
    console.log(admin);
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
                    <Button className="ms-2" color="danger">Delete</Button>
                </CardBody>
            </Card>
        </Col>
    )
}
