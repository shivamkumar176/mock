import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import { cartProduct, deleteProduct } from "./Redux/action";

function Product() {
  const productList = useSelector((state) => state.productReducer);
  console.log(productList)
  const dispatch = useDispatch();

  const deleteProducts = (productId) => {
    dispatch(deleteProduct(productList, productId));
  };

  const cartDetails = (u) => {
    console.log(u)
  if(dispatch(cartProduct( u))){
    alert("Product Added Successfully")
  } 
};
  
  return (
    <>
        <div style={{ backgroundColor: "lightgray", display: "flex" }}>
          <div className="container my-3">
            <h1 style={{ textAlign: "center" }}>PRODUCT DETAILS</h1>
            {productList.map((ele) => {
              return (
                <div className="my-5 " >
                  <Card style={{ width: "22rem" , borderRadius:"10px"}}>
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
                        onClick={() => {
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