import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Row } from 'reactstrap'
import base_url from '../../api/bootapi';
import Admin from './Admin'


export default function ViewAdmin() {

    useEffect(() => {
        document.title = "All Admins";
        getAllAdmin();
    }, []); // when you use [] it'll re run the hook everytiime it sees an updation. [] will make sure the hook runs only when the component is mounted


    //function to get all admin
    const getAllAdmin = () => {
        axios.get(`${base_url}/api/admins`).then(
            (response) => {
                toast.success("Loading Success");
                // console.log(response.data);
                setAdmin(response.data);
            },
            (error) => {
                console.log(error);
                toast.error("Server Down");
            }
        )
        
    }
    const deleteAdmin = (id) => {
        setAdmin(admin.filter((a) => a.id !== id));
    }
    const [admin, setAdmin] = useState([{
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
                    admin.length > 0 ? admin.map((item) => (
                        <Admin  admin={item} update={deleteAdmin}/>
                    )) : <h2>No Admin Found</h2>
                } 
            </Row>

        </div>
    )
}
