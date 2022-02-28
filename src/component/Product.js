import React, { useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { cartProduct, deleteProduct } from "./Redux/action";

function Product() {
  const productList = useSelector((state) => state.productReducer);
  const [data, setData] = useState(productList);
  console.log(productList);
  const dispatch = useDispatch();

  const deleteProducts = (productId) => {
    dispatch(deleteProduct(productList, productId));
  };

  const cartDetails = (u) => {
    console.log(u);
    if (dispatch(cartProduct(u))) {
      alert("Product Added Successfully");
    }
  };
  const searchData = (e, ProductList) => {
    console.log(e.target.value);
    let arr=[]

    productList.map((ele)=>{
      if (ele.productName.includes(e.target.value)) {
        arr=[...arr,ele]

      }
    })
    console.log("filterdData",arr);
    setData(arr)
    // const data = e.target.value;
    // console.log(data);
    // console.log(productList);
    // dispatch(searchData(data,ProductList));
  };
  return (
    <>
      <div style={{ backgroundColor: "lightgray", display: "flex" }}>
        <div className="container my-3">
          <h1 style={{ textAlign: "center" }}>PRODUCT DETAILS</h1>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    onKeyUp={(e) => {
                      searchData(e);
                    }}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>

          {data.map((ele) => {
          // {productList.map((ele) => {
            return (
              <div className="my-5 ">
                <Card style={{ width: "22rem", borderRadius: "10px" }}>
                  <Card.Body>
                    <Card.Text>
                      Product Name : {ele.productName}
                      <br></br>
                      Product Model : {ele.productModel}
                      <br></br>
                      Product Price : {ele.productPrice}
                      <br></br>
                      Product Brand : {ele.productBrand}
                    </Card.Text>
                    <button
                      className="btn btn-primary"
                      onClick={(ele) => {
                        deleteProducts(ele.productId);
                      }}
                    >
                      DELETE
                    </button>
                    <button
                      className="btn btn-primary"
                      style={{ marginLeft: "80px" }}
                      onClick={() => {
                        cartDetails(ele);
                      }}
                    >
                      ADD TO CART
                    </button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Product;
