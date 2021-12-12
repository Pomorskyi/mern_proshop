//axios - for darabases
import axios from 'axios'
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from '../constants/productConstants'

//export function that will get a list of products from backend using the error which were written earlier such as PRODUCT_LIST_FAIL
export const listProduct = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST })

    const { data } = await axios.get('/api/products')

    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
