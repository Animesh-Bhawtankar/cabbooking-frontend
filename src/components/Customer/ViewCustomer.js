import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Row } from 'reactstrap'
import base_url from '../../api/bootapi';

import Customer from './Customer';



export default function ViewCustomer() {

    useEffect(() => {
        document.title = "All Customer";
        getAllCustomer();
    }, []); // when you use [] it'll re run the hook everytiime it sees an updation. [] will make sure the hook runs only when the component is mounted


    //function to get all admin
    const getAllCustomer = () => {
        axios.get(`${base_url}/api/customers`).then(
            (response) => {
                toast.success("Loading Success");
                // console.log(response.data);
                setCustomer(response.data);
            },
            (error) => {
                console.log(error);
                toast.error("Server Down");
            }
        )
        
    }
    const deleteCustomer= (id) => {
        setCustomer(customer.filter((a) => a.id !== id));
    }
    const[customer, setCustomer] = useState([{
        address: "admin_33_address",
        email: "admin_33@gmail.com",
        id: 17,
        mobileNumber: "3333333333",
        password: "33333",
        username: "admin_33_username"
    }]);
    return (
        <div>
            <Row sm="3" className="mx-3">
                {
                    customer.length > 0 ? customer.map((item) => (
                        <Customer  customer={item} update={deleteCustomer}/>
                    )) : <h2>No Customer Found</h2>
                } 
            </Row>

        </div>
    )
}
