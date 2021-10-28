import axios from 'axios';
import React from 'react'
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { Button, Card, CardBody, CardImg, CardSubtitle, CardTitle, Col } from 'reactstrap'
import base_url from '../../api/bootapi';
// import UpdateAdmin from '../Admin/UpdateAdmin';

export default function ViewTrip({ trip, update }) {
    const deleteTrip = (id) => {
        axios.delete(`${base_url}/api/tripbookings/${id}`).then (
            (response) => {
                toast.success("Trip Cancelled");
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
        history.push("/tripBooking/updateTrip");
    }
    return (
        
        <Col className="my-3">
            <Card>
                <CardImg top width="100%" src="https://i.pinimg.com/564x/4c/0b/c5/4c0bc5ccdbb4b43b23d0b3ff22329b57.jpg" alt="AdminImg" />
                <CardBody className="text-center">
                    <CardTitle tag="h6">Trip ID: {trip.id}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Total Bill: {trip.bill}</CardSubtitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Total Distance In Km: {trip.distanceInKm}</CardSubtitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">From Location: {trip.fromLocation}</CardSubtitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">To Location: {trip.toLocation}</CardSubtitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">From DateTime: {trip.fromDateTime}</CardSubtitle>
                    {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Cab Id: {trip.cabId}</CardSubtitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Customer Id: {trip.customerId}</CardSubtitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Driver Id: {trip.driverId}</CardSubtitle> */}
                    <Button color="primary" onClick={handleRoute}>Update</Button>
                    <Button className="ms-2" color="danger" onClick={() => {deleteTrip(trip.id)}}>Cancel Ride</Button>
                </CardBody>
            </Card>
        </Col>
    )
}
