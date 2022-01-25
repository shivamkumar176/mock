
const ProductList = [];
const cartProduct = (state=ProductList,action) => {
    console.log(action.payload);
  switch (action.type) {
    case "cartProduct":
      console.log([...state, action.payload], "array in store");
      return [...state, action.payload];
    default:
      return state;
  }
};

export default cartProduct;
