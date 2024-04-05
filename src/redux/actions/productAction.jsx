import useGetData from "../../hooks/useGetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData";
import { GET_ERROR , CREATE_PRODUCTS , GET_PRODUCTS_DETALIS , GET_ALL_PRODUCTS } from "../type";




export const createProduct = (formatData) => async (dispatch) => {
    try {
      const response = await useInsertDataWithImage(`/api/v1/products`, formatData);
      dispatch({
        type: CREATE_PRODUCTS,
        payload: response,
        loading: true,
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };
  
  export const getAllProducts = () => async (dispatch) => {
    try {
      const response = await useGetData(`/api/v1/products`);
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: response,
        loading: true,
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };

  export const getOneProduct = (id) => async (dispatch) => {
    try {
      const response = await useGetData(`/api/v1/products/${id}`);
      dispatch({
        type: GET_PRODUCTS_DETALIS,
        payload: response,
        loading: true,
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };
  