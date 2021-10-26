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
            </Col>
            <Col lg={9}>
              <h1>This is content side</h1>
              <Route path="/admin/addAdmin" component={AddAdmin} exact />
              <Route path="/admin/viewAdmin" component={ViewAdmin} exact />
            </Col>
          </Row>
          {/* customer menu and content */}
        </Switch>
      </Container>

    </Router>
  );
}

export default App;

