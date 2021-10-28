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
import ViewAllTrips from './components/TripBooking/ViewAllTrips';
import UpdateTrip from './components/TripBooking/UpdateTrip';
import ViewTripById from './components/TripBooking/ViewTripById';
import ViewTripByCustId from './components/TripBooking/ViewTripByCustId';
import CustomerMenu from './components/Customer/CustomerMenu';
import DriverMenu from './components/Driver/DriverMenu';
import AddCustomer from './components/Customer/AddCustomer';
import UpdateCustomer from './components/Customer/UpdateCustomer';
import CustomerById from './components/Customer/CustomerById';
import CustomerByEmail from './components/Customer/CustomerByEmail';
import AddDriver from './components/Driver/AddDriver';
import UpdateDriver from './components/Driver/UpdateDriver';
import DriverById from './components/Driver/DriverById';
import ViewBestDriver from './components/Driver/ViewBestDriver';
import ViewDriver from './components/Driver/ViewDriver';
import DriverByEmail from './components/Driver/DriverByEmail';

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
              <Route path="/customer" component={CustomerMenu}  />
              <Route path="/driver" component={DriverMenu}  />
            </Col>
            <Col lg={9}>
              <h1>This is content side</h1>
              <Route path="/admin/addAdmin" component={AddAdmin} exact />
              <Route path="/admin/viewAdmin" component={ViewAdmin} exact />
              <Route path="/admin/updateAdmin" component={UpdateAdmin} exact />
              <Route path="/admin/adminById" component={AdminById} exact />
              <Route path="/tripBooking/addTrip" component={AddTrip} exact />
              <Route path="/tripBooking/viewAllTrips" component={ViewAllTrips} exact/> 
              <Route path="/tripBooking/updateTrip" component={UpdateTrip} exact/> 
              <Route path="/tripBooking/viewTripById" component={ViewTripById} exact/> 
              <Route path="/tripBooking/viewTripByCustomer" component={ViewTripByCustId} exact/> 
              <Route path="/customer/addCustomer" component={AddCustomer} exact/>
              <Route path="/customer/updateCustomer" component={UpdateCustomer} exact/>
              <Route path="/customer/customerById" component={CustomerById}/>
              <Route path="/customer/customerByEmail" component={CustomerByEmail} exact/>
              <Route path="/customer/addtrip" component={AddTrip} exact/>
              <Route path="/driver/addDriver" component={AddDriver} exact/>
              <Route path="/driver/updateDriver" component={UpdateDriver} exact/>
              <Route path="/driver/DriverById" component={DriverById} exact/>
              <Route path="/driver/ViewBestDriver" component={ViewBestDriver} exact/>
              <Route path="/driver/viewDriver" component={ViewDriver} exact/>
              <Route path="/driver/DriverByEmail" component={DriverByEmail} exact/>
            </Col>
          </Row>
          {/* customer menu and content */}
        </Switch>
      </Container>

    </Router>
  );
}

export default App;

