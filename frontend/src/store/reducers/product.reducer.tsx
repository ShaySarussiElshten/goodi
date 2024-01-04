import { GET_PRODUCTS } from '../actionsTypes/productsTypes';


const initialState = {
  products: null,
  isProductsLoaded: false,
  profileLoading: false,
  loading: false,
};

// eslint-disable-next-line default-param-last
const productReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case GET_PRODUCTS.START:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCTS.SUCCESS: {
      const { products } = action.payload;
      
      return {
        ...state,
        products,
        isProductsLoaded: true,
        loading: false,
      };
    }
    case GET_PRODUCTS.FAILED:
    case GET_PRODUCTS.UN_AUTHORIZED:
      return {
        ...state,
        products: [],
        isProfilesLoaded: false,
        loading: false,
      };
  }

  return initialState
};

export default productReducer;
