import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Row } from 'reactstrap'
import base_url from '../../api/bootapi';
import Cab from './Cab';



export default function ViewCab() {

    useEffect(() => {
        document.title = "All Cabs";
        getAllCab();
    }, []); // when you use [] it'll re run the hook everytiime it sees an updation. [] will make sure the hook runs only when the component is mounted


    //function to get all admin
    const getAllCab = () => {
        axios.get(`${base_url}/api/cabs/all`).then(
            (response) => {
                toast.success("Loading Success");
                console.log(response.data);
                setCab(response.data);
            },
            (error) => {
                console.log(error);
                toast.error("Server Down");
            }
        )
        
    }
    const deleteCab = (id) => {
        setCab(cab.filter((a) => a.id !== id));
    }
    const [cab, setCab] = useState([{
        carType: "Xuv",
        id: 1,
        perKmRate: "12"
    }]);
    return (
        <div>
            <Row sm="3" className="mx-2">
                {
                    cab.length > 0 ? cab.map((item) => (
                        <Cab  cab={item} update={deleteCab}/>
                    )) : <h2>No Cab Found</h2>
                } 
            </Row>

        </div>
    )
}