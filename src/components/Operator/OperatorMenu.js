import React from 'react'
import { Link } from 'react-router-dom'
// import { ListGroup, ListGroupItem } from 'reactstrap'

export default function OperatorMenu() {
    return (
        <div className="list-group">
            <a href="#!" className="list-group-item list-group-item-action active" aria-current="true">
                Menu
            </a>
            <ul className="list-group list-group-flush">
                <Link className="list-group-item center btn btn-light" to="/operator/addOperator" exact>Add New Operator</Link>
                <Link className="list-group-item center btn btn-light" to="/operator/updateOperator" exact>Update an Operator</Link>
                <Link className="list-group-item center btn btn-light" to="/operator/operatorById" exact>View Operator By Id</Link>
                <Link className="list-group-item center btn btn-light" to="/operator/addCab" exact>Add New Cab</Link>
                <Link className="list-group-item center btn btn-light" to="/operator/cabDetails" exact>View All Cab Details</Link>
                <Link className="list-group-item center btn btn-light" to="/operator/cabofType" exact>View Cab By Cab Type</Link>
                <Link className="list-group-item center btn btn-light" to="/operator/totalTrips" exact>View Total Trips Taken</Link>
                
            </ul>
        </div>
    )
}