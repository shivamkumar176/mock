

export const addProduct = (data)=>{
    return {
        type : "ADD_PRODUCT",
        payload:data
    }
}

export const deleteProduct = (products, productId) => {
  console.log(products)
  console.log(productId)
  const afterDelet = products.filter((ele) => {
    
    return productId !== ele.productId;
    
  });
  console.log(afterDelet)
  return {
    type: "DELETE_PRODUCT",
    payload: afterDelet,
  };
};

export const cartProduct = (productList) => {
  console.log(productList);
  return {
    type: "cartProduct",
    payload: productList,
  };
};



