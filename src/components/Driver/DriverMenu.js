import React from 'react'
import { Link } from 'react-router-dom'

export default function DriverMenu() {
    return (
        <div class="list-group w-100 p-3">
            <a href="#!" class="list-group-item list-group-item-action active" aria-current="true">
                Menu
            </a>
            <ul class="list-group list-group-flush">
                <Link className="list-group-item center btn btn-light" to="/driver/addDriver" exact>Add New Driver</Link>
                <Link className="list-group-item center btn btn-light" to="/driver/updateDriver" exact>Update An Driver</Link>
                <Link className="list-group-item center btn btn-light" to="/driver/DriverById" exact>View Driver By Id</Link>
                <Link className="list-group-item center btn btn-light" to="/driver/ViewBestDriver" exact>View Best Drivers</Link>
                <Link className="list-group-item center btn btn-light" to="/driver/viewDriver" exact>View All Driver Details</Link>
                <Link className="list-group-item center btn btn-light" to="/driver/DriverByEmail" exact>View Driver Details By Email</Link>
                <Link className="list-group-item center btn btn-light disabled" > </Link>
                <Link className="list-group-item center btn btn-light disabled" > </Link>
                <Link className="list-group-item center btn btn-light disabled" > </Link>
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
