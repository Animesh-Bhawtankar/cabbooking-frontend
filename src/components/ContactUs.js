import React from 'react'
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import Footer from './Footer'

export default function ContactUs() {
  return (
    <div className="mx- my- dark bg-dark text-light px-5 pt-4">
      <Form className="my-3 mx-5">
        <Row form>
          <Col md={6}>
            <FormGroup className="mx-5">
              <Label for="exampleEmail">
                Email
              </Label>
              <Input
                className="bg-secondary text-light my-1"
                id="exampleEmail"
                name="email"
                placeholder="with a placeholder"
                type="email"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={9}>
            <FormGroup className="mx-5 my-2">
              <Label for="exampleAddress">
                Address
              </Label>
              <Input
                className="bg-secondary text-light my-1"
                id="exampleAddress"
                name="address"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={9}>
            <FormGroup className="mx-5 my-2">
              <Label for="exampleAddress2">
                Enter Your Query
              </Label>
              <Input
                className="bg-secondary text-light my-1"
                id="exampleAddress2"
                name="address2"
                placeholder="Query..."
              />
            </FormGroup>
          </Col>
        </Row>

        <Button className="ms-5 me-4 mt-3 bg-warning text-dark">
          Submit
        </Button>
        <Button type="reset" value="reset" className="mt-3">
          Clear All
        </Button>
        {/* <FormGroup> </FormGroup>
        <FormGroup> </FormGroup>
        <FormGroup> </FormGroup>
        <FormGroup> </FormGroup> */}
      </Form>
      <Footer />
    </div>
  )
}
