import React from "react";
import { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function Registration(props) {
    const [formValues, setFormValues] = useState({
      name:"",
      username:"",
      emailid:"",
      password:"",
      confirmpassword:""
    });


    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
      validate(formValues);
    //   console.log(formValues);
      props.history.push('/')
    };

     const validate = (values) => {
       const errors = {};
       if (!values.name) {
         errors.name = "Please enter fullname...";
       }
       
       return errors;
     };

  return (
    <div className="container">
      <div className="row">
        <div className="col"></div>
        <div className="col my-5 ">
          <div className="card style={{ width: '18rem'}} ">
            <div className=" bg-light">
              <Form style={{ textAlign: "center" }} className="m-5" >
                <Form.Group className="mb-3" controlId="formPlaintextEmail">
                  <Form.Label>Name : </Form.Label>
                  <Col sm="15">
                    <Form.Control
                      type="email"
                      name="name"
                      placeholder="Enter name here ..."
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPlaintextEmail">
                  <Form.Label>Username :</Form.Label>
                  <Col sm="15">
                    <Form.Control
                      type="text"
                      name="username"
                      placeholder="Enter username here ..."
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPlaintextEmail">
                  <Form.Label>Email id:</Form.Label>
                  <Col sm="15">
                    <Form.Control
                      type="text"
                      name="emailid"
                      placeholder="Enter email-id here ..."
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPlaintextPassword">
                  <Form.Label>Password</Form.Label>
                  <Col sm="15">
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Enter Password here ..."
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPlaintextPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Col sm="15">
                    <Form.Control
                      type="password"
                      name="confirmpassword"
                      placeholder="Enter Password again ..."
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>
                  <Button className="btn btn-success mx-5" onClick={handleChange}>Submit</Button>
                <div>
                  <Link to="/LoginPage">
                    <p>Already have an account ? Sign In </p>
                  </Link>
                </div>
              </Form>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default Registration;
