// import axios from "axios";   
import React, { useRef } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function LoginPage(props) {

  const goToNav = () => {
    localStorage.setItem("token", "tokenGenerated");
    // const data = axios.post(`http://localhost:8000/signin/`,{params:{email: userName.current.value, password: password.current.value}});
    props.history.push("/NavigationBar");
    // console.log(userName.current.value)
    // console.log(password.current.value)
  }
  const userName = useRef();
  const password = useRef();

   
  return (
    <div className="container">
      <div className="row">
        <div className="col"></div>
        <div className="col my-5">
          <div>
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                  Email
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="email" placeholder="Enter email-id here ..." ref={userName}/>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Password
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="password" placeholder="Enter Password here ..." ref={password} />
                </Col>
              </Form.Group>
              <Link to="/NavigationBar">
                <Button className="btn btn-success mx-5" onClick={goToNav}>Submit</Button>
              </Link>
            </Form>
          </div>
          <div>
            <Link to="/Registration">
              <p>Create new account </p>
            </Link>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default LoginPage;