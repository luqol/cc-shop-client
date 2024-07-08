

//selectors
export const getCart = state => state.cart;
export const getCartProductById = ({cart}, productId) => cart.find( product => product.id === productId);

//actions
const createActionName = actionName => `app/cart/${actionName}`;
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const UPDATE_PRODUCT = createActionName('UPDATE_PRODUCT');

//action creators

export const addProduct = payload => ({type: ADD_PRODUCT, payload});
export const updateProduct = payload => ({type:UPDATE_PRODUCT, payload});

const cartReducer = (statePart = [], action) => {

    switch(action.type){
        case ADD_PRODUCT:
            return [...statePart, action.payload];
        case UPDATE_PRODUCT:
            return statePart.map( product => (
                product.id === action.payload.id ? {...product, quantity: product.quantity + action.payload.quantity}: product
            ))
        default:
            return statePart;
    }
};

export default cartReducer;