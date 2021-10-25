import './App.css';
import Navbar from './components/Navbar';
import { Col, Container, Row } from 'reactstrap'
import AdminMenu from './components/Admin/AdminMenu';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar title="CabBookingApp" admin="Admin" customer="Customer" driver="Driver" operator="Operator" tripbooking="Trip-Booking" />
        <Container fluid className="my-1"> {/* use gx-0 for setting gutter length */}
          <Switch>
            {/* admin menu and content */}
            <Route exact path="/admin">
              <Row>
                <Col lg={3} >
                  <AdminMenu />
                </Col>
                <Col lg={9}>
                  <h1>This is content side</h1>
                </Col>
              </Row>
            </Route>
            {/* customer menu and content */}
            <Route exact path="/customer">
              <Row>
                <Col lg={3} >
                  <h1>this is menu side</h1>
                </Col>
                <Col lg={9}>
                  <h1>This is content side</h1>
                </Col>
              </Row>
            </Route>
          </Switch>
        </Container>

      </Router>

    </>
  );
}

export default App;
