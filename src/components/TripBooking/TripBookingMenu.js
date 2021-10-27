import React from 'react'
import { Link } from 'react-router-dom'

export default function TripBookingMenu() {
    return (
        <div className="list-group">
            <a href="#!" className="list-group-item list-group-item-action active" aria-current="true">
                Menu
            </a>
            <ul className="list-group list-group-flush">
                <Link className="list-group-item center btn btn-light" to="/tripBooking/addTrip" exact>Add New Trip</Link>
                <Link className="list-group-item center btn btn-light" to="/tripBooking/updateTrip" exact>Update A Trip</Link>
                <Link className="list-group-item center btn btn-light" to="/tripBooking/viewAllTrips" exact>View All Trip Details</Link>
                <Link className="list-group-item center btn btn-light" to="/tripBooking/viewTripById" exact>View Trip Detail By Id</Link>
                <Link className="list-group-item center btn btn-light" to="/tripBooking/viewTripByCustomer" exact>View Trip Detail By Customer Id</Link>
                <Link className="list-group-item center btn btn-light" to="/tripBooking/totalBillofCustomer" exact>View Bill By Customer Id</Link>
            </ul>
        </div>
    )
}
