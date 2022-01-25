import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cartProduct);
  console.log(cart);
  

  return (
    <>
      <div style={{ backgroundColor: "lightgoldenrodyellow" }}>
        <div style={{ display: "flex" }}>
          {cart.map((details, ele) => {
            return (
              <div>
                <Card
                  className="p-4 m-4"
                  style={{ width: "18rem", borderRadius: "20px" }}
                  key={ele}
                >
                  <Card.Img
                    variant="top"
                    src={details.productImg}
                  />
                  <Card.Body>
                    {details.productName}
                    <br></br>
                    {details.productModel}
                    <br></br>
                    {details.productPrice}
                    <br></br>
                    {details.productBrand}
                    <br></br>
                    <br></br>
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

export default Cart;
