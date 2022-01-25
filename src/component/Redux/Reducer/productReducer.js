const initialData =[];
const productReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
     return [...state,action.payload]
     case "DELETE_PRODUCT" :
       return action.payload
       case "CART_PRODUCT":
         return action.payload
      default: return state;
  }
};

export default productReducer;