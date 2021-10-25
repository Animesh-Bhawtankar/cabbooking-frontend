import React from 'react'
// import { ListGroup, ListGroupItem } from 'reactstrap'

export default function AdminMenu() {
    return (
        <div class="list-group">
            <a href="#!" class="list-group-item list-group-item-action active" aria-current="true">
                Menu
            </a>
            <ul class="list-group list-group-flush">
                <button class="list-group-item">Add New Admin</button>
                <button class="list-group-item">Update an Admin</button>
                <button class="list-group-item">Delete Admin</button>
                <button class="list-group-item">Get Admin By ID</button>
                <button class="list-group-item">View Admin Details</button>
                <button class="list-group-item">View Trips Datewise</button>
                <button class="list-group-item">View Trips Customerwise</button>
                <button class="list-group-item">View All Trips</button>
                <button class="list-group-item">View All Customers</button>
                <button class="list-group-item">View All Drivers</button>
            </ul>
        </div>
    )
}
