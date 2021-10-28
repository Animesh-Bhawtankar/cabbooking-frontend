import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Row } from 'reactstrap';
import base_url from '../../api/bootapi';
import ViewTrip from './ViewTrip';

export default function ViewAllTrips() {
    useEffect(() => {
        document.title = "All Trips List";
        getAllTrips();
    }, []); // when you use [] it'll re run the hook everytiime it sees an updation. [] will make sure the hook runs only when the component is mounted


    //function to get all admin
    const getAllTrips = () => {
        axios.get(`${base_url}/api/tripbookings/all`).then(
            (response) => {
                toast.success("Loading Success");
                console.log(response.data);
                setTrip(response.data);
            },
            (error) => {
                console.log(error);
                toast.error("Server Down");
            }
        )

    }
    const deleteTrip = (id) => {
        setTrip(trip.filter((a) => a.id !== id));
    }
    const [trip, setTrip] = useState([]);
    return (
        <div>
            <Row sm="3" className="mx-3">
                {
                    trip.length > 0 ? trip.map((item) => (
                        <ViewTrip trip={item} update={deleteTrip} />
                    )) : <h2>No Trip Data Found</h2>
                }
            </Row>
        </div>
    )
}
