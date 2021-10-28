import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Button, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import base_url from '../../api/bootapi';
import Operator from './Operator';
 
export default function OperatorById() {
    useEffect(() => {
        document.title = "Fetch Operator From Id";
    }, []);

    const [operatorid, setId] = useState('');
    const fetchOperator = (e) => {
        console.log(operatorid);
        operatorFromServer(operatorid);
        e.preventDefault();
    }
    const [operator, setOperator] = useState([{
        address: "operator_33_address",
        email: "operator_33@gmail.com",
        id: 17,
        mobileNumber: "3333333333",
        password: "33333",
        username: "operator_33_username"
    }]);
    const operatorFromServer = (operatorid) => {
        //console.log(username);
        axios.get(`${base_url}/api/operators/${operatorid}`).then(
            (response) => {
                toast.success("Fetching Successfull");
                console.log(response.data);
                setOperator(response.data);
                //console.log(admin);
            },
            (error) => {
                toast.error("Something Went Wrong");
                console.log(error);
            }
        )
    }
    const deleteOperator = (id) => {
        setOperator({
            address: " ",
            email: " ",
            id: null,
            mobileNumber: " ",
            password: " ",
            username: " "
        });
    }
    return (
        <>
            <Form onSubmit={fetchOperator}>
                <FormGroup className="mx-5">
                    <Label className="my-3">Operator Id</Label>
                    <Input type="number" name="operatorId" id="exampleId" placeholder="Enter Operator Id Here" onChange={(event) => {
                        setId(event.target.value);
                        console.log(operatorid);
                    }} />
                </FormGroup>
                <Button className="my-3 mx-5" color="info" type="submit">View Operator</Button>
                <Button className="" color="secondary" type="reset" value="reset">Clear All</Button>
            </Form>
            <div>
                <Row sm="3" className="mx-3">
                    {
                        // admin.length > 0 ? admin.map((item) => (
                        //     // <Admin admin={item} update={deleteAdmin} />
                        //     <Admin admin={item}  update={deleteAdmin}/>
                        // )) : <h2>No Admin Found</h2>
                        <Operator operator={operator} update={deleteOperator} />
                    }
                </Row>
            </div>
        </>
    )
}