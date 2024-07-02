import { API_URL } from '../config';

//selectors
export const getAllProduct = state => state.products;
export const getProductById = ({products}, productId) => products.find( product => product.id === productId);

//actions
const createActionName = actionName => `app/products/${actionName}`;
const UPDATE_PRODUCTS = createActionName('UPDATE_PRODUCTS');

//action creators
export const updateProducts = payload => ({type: UPDATE_PRODUCTS, payload});
export const fetchProducts = () => {
    return (dispatch) => {
        fetch(`${API_URL}/products`)
        .then( res => {
            if (res.ok) {
                return res.json()
            } else {
                console.log('error staus', res.status);
            }
        }).then(products => dispatch(updateProducts(products)))
    }
};

const productsReducer = (statePart = [], action) => {

    switch (action.type){
        case UPDATE_PRODUCTS:
            return [...action.payload];
        default:
            return statePart;
    }
}

export default productsReducer;