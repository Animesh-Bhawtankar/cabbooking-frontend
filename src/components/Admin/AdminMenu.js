import React from 'react'
import { Link } from 'react-router-dom'
// import { ListGroup, ListGroupItem } from 'reactstrap'

export default function AdminMenu() {
    return (
        <div className="list-group w-100 p-3">
            <a href="#!" className="list-group-item list-group-item-action active" aria-current="true">
                Menu
            </a>
            <ul className="list-group list-group-flush">
                <Link className="list-group-item center btn btn-light" to="/admin/addAdmin" exact>Add New Admin</Link>
                <Link className="list-group-item center btn btn-light" to="/admin/updateAdmin" exact>Update an Admin</Link>
                <Link className="list-group-item center btn btn-light" to="/admin/viewAdmin" exact>View Admin Details</Link>
                <Link className="list-group-item center btn btn-light" to="/admin/adminById" exact>View Admin By Id</Link>
                <button className="list-group-item btn btn-light">View Trips Datewise</button>
                <Link className="list-group-item btn btn-light" to="/admin/tripsByCustId">View Trips Customerwise</Link>
                <Link className="list-group-item center btn btn-light" to="/admin/viewAllTrips">View All Trips</Link>
                <Link className="list-group-item center btn btn-light" to="/admin/viewAllCustomers">View All Customers</Link>
                <Link className="list-group-item center btn btn-light" to="/admin/viewAllDrivers">View All Drivers</Link>
                <Link className="list-group-item center btn btn-light disabled" > </Link>
                <Link className="list-group-item center btn btn-light disabled" > </Link>
                <Link className="list-group-item center btn btn-light disabled" > </Link>
                <Link className="list-group-item center btn btn-light disabled" > </Link>
                <Link className="list-group-item center btn btn-light disabled" > </Link>
                <Link className="list-group-item center btn btn-light disabled" > </Link>
            </ul>
        </div>
    )
}
