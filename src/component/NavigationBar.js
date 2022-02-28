import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link} from "react-router-dom";

function NavigationBar(props) {
    const goTosignIn=()=>{
        localStorage.clear();
        props.history.push('/');
    }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container className="ps-5">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/NavigationBar/Home" className="ps-3">
              <i className="fas fa-home"></i>&nbsp; Home
            </Nav.Link>
            <Nav.Link as={Link} to="/NavigationBar/Contact" className="ps-3">
              <i className="fas fa-phone-alt"></i>&nbsp;Contact Us
            </Nav.Link>
            <Nav.Link as={Link} to="/NavigationBar/Product" className="ps-3">
              Product Detail
            </Nav.Link>
            <Nav.Link as={Link} to="/NavigationBar/AddProduct" className="ps-3">
              Add Product
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/"
              onClick={goTosignIn}
              className="ps-3"
            >
              LOGOUT
            </Nav.Link>
          </Nav>
        </Container>
        <Nav.Link
          as={Link}
          to="/NavigationBar/Cart"
          className="justify-content-end me-5"
        >
          <i className="fas fa-shopping-cart"></i>&nbsp;&nbsp;CART
          {/* <Badge bg="secondary">CART</Badge> 
          */}
        </Nav.Link>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
