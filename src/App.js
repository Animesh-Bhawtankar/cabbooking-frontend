import './App.css';
import Navbar from './components/Navbar';
import { Col, Container, Row } from 'reactstrap'
import AdminMenu from './components/Admin/AdminMenu';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddAdmin from './components/Admin/AddAdmin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ViewAdmin from './components/Admin/ViewAdmin';
import UpdateAdmin from './components/Admin/UpdateAdmin';
import AdminById from './components/Admin/AdminById';
import TripBookingMenu from './components/TripBooking/TripBookingMenu';
import AddTrip from './components/TripBooking/AddTrip';

function App() {
  return (
    <Router>
      <ToastContainer />
      <Navbar title="CabBookingApp" admin="Admin" customer="Customer" driver="Driver" operator="Operator" tripbooking="Trip-Booking" />
      <Container fluid className="my-1"> {/* use gx-0 for setting gutter length */}
        <Switch>
          <Row>
            <Col lg={3} >
              <Route path="/admin" component={AdminMenu}  />
              <Route path="/tripBooking" component={TripBookingMenu}  />
            </Col>
            <Col lg={9}>
              <h1>This is content side</h1>
              <Route path="/admin/addAdmin" component={AddAdmin} exact />
              <Route path="/admin/viewAdmin" component={ViewAdmin} exact />
              <Route path="/admin/updateAdmin" component={UpdateAdmin} exact />
              <Route path="/admin/adminById" component={AdminById} exact />
              <Route path="/tripBooking/addTrip" component={AddTrip} exact />
            </Col>
          </Row>
          {/* customer menu and content */}
        </Switch>
      </Container>

    </Router>
  );
}

export default App;

