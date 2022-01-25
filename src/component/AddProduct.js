import React, { useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "./Redux/action/index";

function AddProduct(props) {
  const dispatch = useDispatch();
  const myProductList = useSelector((state) => state);
  // const myProductList1 = useSelector((state) => state);
  console.log(myProductList.productReducer);
  const nameRef = useRef();
  const nameRef1 = useRef();
  const nameRef2 = useRef();
  const nameRef3 = useRef();
  const nameRef4 = useRef();

  // const [inputData, setInputData] = useState({});

  // const changeProductName = (e) => {
  //   const copyInputData = { ...inputData };
  //   copyInputData.productName = e.target.value;
  //   setInputData(copyInputData);
  // };
  // const changeProductModel = (e) => {
  //   const copyInputData = { ...inputData };
  //   copyInputData.productModel = e.target.value;
  //   setInputData(copyInputData);
  // };
  // const changeProductPrice = (e) => {
  //   const copyInputData = { ...inputData };
  //   copyInputData.productPrice = e.target.value;
  //   setInputData(copyInputData);
  // };

  // const changeProductBrand = (e) => {
  //   const copyInputData = { ...inputData };
  //   copyInputData.productBrand = e.target.value;
  //   setInputData(copyInputData);
  // };

  // useEffect(() => {
  // if(Object.keys(inputData).length===0){
  // }
  // }, [inputData]);

  const submit = () => {
    let name = nameRef.current.value;
    let pname = nameRef1.current.value;
    let price = nameRef2.current.value;
    let brand = nameRef3.current.value;
    let imgLink = nameRef4.current.value;
    console.log({ name, pname, price, brand , imgLink });

    let data = {
      productId: Math.random(),
      productName: name,
      productModel: pname,
      productPrice: price,
      productBrand: brand,
      productImg: imgLink,
    };
     if(dispatch(addProduct(data))) {
    alert("Product Added Successfully")
    }
    
   
    nameRef.current.value = "";
    nameRef1.current.value = "";
    nameRef2.current.value = "";
    nameRef3.current.value = "";
    nameRef4.current.value = "";
    // props.history.push('/Navigation/ Product')
  };

  return (
    <div style={{ backgroundColor: "lightgoldenrodyellow" }}>
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col my-5" style={{ display: "flex" }}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Form onSubmit={(event) => {}}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="productName"
                      ref={nameRef}
                      placeholder="Enter Product's Name ..."
                      // onChange={changeProductName}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Product Model</Form.Label>
                    <Form.Control
                      type="text"
                      name="productModel"
                      ref={nameRef1}
                      placeholder="Enter Model ..."
                      // onChange={changeProductModel}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Product Price</Form.Label>
                    <Form.Control
                      type="text"
                      name="productPrice"
                      ref={nameRef2}
                      placeholder="Enter Product's Price ..."
                      // onChange={changeProductPrice}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Product Brand</Form.Label>
                    <Form.Control
                      type="text"
                      name="productBrand"
                      ref={nameRef3}
                      placeholder="Enter Product's Brand ..."
                      // onChange={changeProductBrand}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Product Img</Form.Label>
                    <Form.Control
                      type="text"
                      name="productImg"
                      ref={nameRef4}
                      placeholder="Enter Product's ImgLink ..."
                      // onChange={changeProductBrand}
                    />
                  </Form.Group>
                  <Button className="btn btn-bg-success" onClick={submit}>
                    ADD PRODUCT
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
