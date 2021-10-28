import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Row } from 'reactstrap'
import base_url from '../../api/bootapi';
import Driver from './Driver';

// import { useHistory } from 'react-router'
export default function ViewBestDriver() {

    useEffect(() => {
        document.title = "All Drivers";
        getAllBestDrivers();
    }, []); // when you use [] it'll re run the hook everytiime it sees an updation. [] will make sure the hook runs only when the component is mounted


    //function to get all admin
    const getAllBestDrivers = () => {
        axios.get(`${base_url}/api/drivers/bestdrivers`).then(
            (response) => {
                toast.success("Loading Success");
                setDriver(response.data);
            },
            (error) => {
                console.log(error);
                toast.error("Error Loading");
            }
        )
        
    }
    const deleteDriver = (id) => {
        setDriver(driver.filter((a) => a.id !== id));
    }
    const [driver, setDriver] = useState([{
        address: "admin_33_address",
        email: "admin_33@gmail.com",
        id: 17,
        mobileNumber: "3333333333",
        password: "33333",
        username: "admin_33_username",
      
    }]);
    return (
        <div>
            <Row sm="3" className="mx-3">
                {
                    driver.length > 0 ? driver.map((item) => (
                        <Driver driver={item} update={deleteDriver}/>
                    )) : <h2>No Driver Found</h2>
                } 
            </Row>

        </div>
    )
}