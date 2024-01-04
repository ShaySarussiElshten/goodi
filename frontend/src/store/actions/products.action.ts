/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { URLS } from '../../enum';
import {
  GET_PRODUCTS,
} from '../actionsTypes';
import { AnyAction } from 'redux';


const getProductsStart = () => ({
  type: GET_PRODUCTS.START,
});

const getProducts = (data:any, status:any) => ({
  type: GET_PRODUCTS.SUCCESS,
  isApiCall: true,
  payload: data,
  status,
});

const getProductsAsync = () => async (dispatch:any) => {
  dispatch(getProductsStart());
  let response = { data: null, status: null };
  try {
    response = await axios.get(URLS.GET_PRODUCTS);
  } catch (error: any) {
    response = error.response;
    console.log(error);
  } finally {
    const { data, status } = response;
    dispatch(getProducts(data, status));
  }
};



const productActions = {
  getProductsAsync,
};

export default productActions;
