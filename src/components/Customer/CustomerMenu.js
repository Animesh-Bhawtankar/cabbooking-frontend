import React from 'react'
import { Link } from 'react-router-dom'
 
export default function CustomerMenu() {
    return (
        <div class="list-group w-100 p-3">
            <a href="#!" class="list-group-item list-group-item-action active" aria-current="true">Menu
            </a>
            <ul class="list-group list-group-flush">
                <Link class="list-group-item center btn btn-light" to="/customer/addCustomer" exact>Add New Customer</Link>
                <Link class="list-group-item center btn btn-light" to="/customer/updateCustomer" exact>Update Customer</Link>
                <Link class="list-group-item center btn btn-light" to="/customer/customerById" exact>Get Customer By Id</Link>
                <Link class="list-group-item center btn btn-light" to="/customer/customerByEmail" exact>Get Customer By Email</Link>
                <Link class="list-group-item center btn btn-light" to="/customer/addtrip" exact>Book a trip</Link>
                <Link className="list-group-item center btn btn-light disabled" > </Link>
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