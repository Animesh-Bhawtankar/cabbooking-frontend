import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Row } from 'reactstrap'
import base_url from '../../api/bootapi';
import Operator from './Operator'

 
export default function ViewOperator() {

    useEffect(() => {
        document.title = "All Operators";
        getAllOperator();
    }, []); // when you use [] it'll re run the hook everytiime it sees an updation. [] will make sure the hook runs only when the component is mounted


    //function to get all operators
    const getAllOperator = () => {
        axios.get(`${base_url}/api/operators`).then(
            (response) => {
                toast.success("Loading Success");
                // console.log(response.data);
                setOperator(response.data);
            },
            (error) => {
                console.log(error);
                toast.error("Server Down");
            }
        )
        
    }
    const deleteOperator = (id) => {
        setOperator(operator.filter((a) => a.id !== id));
    }
    const [operator, setOperator] = useState([{
        address: "operator_44_address",
        email: "operator_44@gmail.com",
        id: 18,
        mobileNumber: "4444444444",
        password: "44444",
        username: "operator_44_username"
    }]);
    return (
        <div>
            <Row sm="3" className="mx-3">
                {
                    operator.length > 0 ? operator.map((item) => (
                        <Operator  operator={item} update={deleteOperator}/>
                    )) : <h2>No Operator Found</h2>
                } 
            </Row>

        </div>
    )
}