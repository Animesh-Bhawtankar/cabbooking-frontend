import React ,{useEffect,useState} from "react";
import { Button,Form ,FormGroup,Input, Label } from "reactstrap"; 
import axios from "axios";
import base_url from '../../api/bootapi';


export default function AddCustomer(){

    useEffect(()=>{

        document.title="Add Customer Page"
    },[]);

    const [customer,setCustomer]=useState({});

    //Form Handler function
    const handleForm=(e)=>{
        console.log(customer);
        postDatatoServer(customer);
        e.preventDefault();
    }

    //creating function to post data  on server

    const postDatatoServer=(customer)=>{
        axios.post(`${base_url}/api/customers`,customer).then(
          (response)=>{
            console.log(response);
            console.log("Success");
          },
          (error)=>{
              console.log(error);
          }
        )
    }
 

    return(
        <Form onSubmit={handleForm}>
            <FormGroup className="my-3 mx-3">
                <Label>Address</Label>
                <Input type="text" name="address" id="Address" placeholder="Enter your Address"  
                onChange={(e)=>{
                    setCustomer({...customer,address:e.target.value})
                }}></Input>
            </FormGroup>
            <FormGroup className="my-3 mx-3">
                <Label>Email</Label>
                <Input type="email" name="email" id="Email" placeholder="Enter your Email"
                 onChange={(e)=>{
                    setCustomer({...customer,email:e.target.value})
                }}></Input>
            </FormGroup>
            <FormGroup className="my-3 mx-3">
                <Label>Mobile Number</Label>
                <Input type="number" name="number" id="Number" placeholder="Enter your Number"
                 onChange={(e)=>{
                    setCustomer({...customer,mobileNumber:e.target.value})
                }}></Input>
            </FormGroup >
            <FormGroup className="my-3 mx-3">
                <Label>Password</Label>
                <Input type="password" name="password" id="Password" placeholder="Enter your Password"
                 onChange={(e)=>{
                    setCustomer({...customer,password:e.target.value})
                }}></Input>
            </FormGroup>
            <FormGroup className="my-3 mx-3">
                <Label>Username</Label>
                <Input type="text" name="username" id="Username" placeholder="Enter your Username"
                 onChange={(e)=>{
                    setCustomer({...customer,username:e.target.value})
                }}></Input>
            </FormGroup>
            <Button className="my-3 mx-3" color="warning" type="submit">Add Customer</Button>
            <Button className="my-3" color="secondary" type="reset" value="reset">Clear All</Button>
        </Form>
            
        )

}





