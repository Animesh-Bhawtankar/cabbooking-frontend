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
import OperatorMenu from './components/Operator/OperatorMenu';
import AddOperator from './components/Operator/AddOperator';
// import ViewOperator from './components/Operator/ViewOperator';
import updateOperator from './components/Operator/UpdateOperator';
import OperatorById from './components/Operator/OperatorById';
import HomePage from './components/HomePage';
import ViewCustomer from './components/Customer/ViewCustomer';
import ViewCab from './components/Operator/ViewCab';
import AddCab from './components/Operator/AddCab';
import ViewCabOfType from './components/Operator/ViewCabOfType';
import ViewBillByCust from './components/TripBooking/ViewBillByCust';
import ContactUs from './components/ContactUs';
// import Footer from './components/Footer';
// import AboutMenu from './components/AboutUs/AboutMenu';
// import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <Router>
      <ToastContainer />
      <Navbar title="CabBookingApp" admin="Admin" customer="Customer" driver="Driver" operator="Operator" tripbooking="Trip-Booking" contactus="Contact Us"/>
      <Container fluid className="gx-0"> {/* use gx-0 for setting gutter length */}
        <Switch>
          <Route path="/"  component={HomePage} exact/>
          <Route path="/contactus" component={ContactUs}  />
          <Row>
            <Col lg={3}>
              <Route path="/admin" component={AdminMenu}  />
              <Route path="/tripBooking" component={TripBookingMenu}  />
              <Route path="/customer" component={CustomerMenu}  />
              <Route path="/driver" component={DriverMenu}  />
              <Route path="/operator" component={OperatorMenu} />
            </Col>
            <Col lg={9}>
              {/* <h1>This is content side</h1> */}
              <Route path="/admin/addAdmin" component={AddAdmin} exact />
              <Route path="/admin/viewAdmin" component={ViewAdmin} exact />
              <Route path="/admin/updateAdmin" component={UpdateAdmin} exact />
              <Route path="/admin/adminById" component={AdminById} exact />
              <Route path="/admin/tripsByCustId" component={ViewTripByCustId} exact />
              <Route path="/admin/viewAllTrips" component={ViewAllTrips}/>
              <Route path="/admin/viewAllCustomers" component={ViewCustomer}/>
              <Route path="/admin/viewAllDrivers" component={ViewDriver}/>
              <Route path="/tripBooking/addTrip" component={AddTrip} exact />
              <Route path="/tripBooking/viewAllTrips" component={ViewAllTrips} exact/> 
              <Route path="/tripBooking/updateTrip" component={UpdateTrip} exact/> 
              <Route path="/tripBooking/viewTripById" component={ViewTripById} exact/> 
              <Route path="/tripBooking/viewTripByCustomer" component={ViewTripByCustId} exact/> 
              <Route path="/tripBooking/totalBillofCustomer" component={ViewBillByCust} exact/> 
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
              <Route path="/operator/addOperator" component={AddOperator} exact />
              <Route path="/operator/updateOperator" component={updateOperator} exact />
              <Route path="/operator/operatorById" component={OperatorById} exact />
              <Route path="/operator/cabDetails" component={ViewCab} exact />
              <Route path="/operator/addCab" component={AddCab} exact />
              <Route path="/operator/cabofType" component={ViewCabOfType} exact />
              <Route path="/operator/totalTrips" component={ViewAllTrips} exact />
              {/* <Route path="/aboutus" component={AboutUs}  /> */}
            </Col>
          </Row>
          {/* customer menu and content */}
        </Switch>
      </Container>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;

