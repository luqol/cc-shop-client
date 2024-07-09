

//selectors
export const getCart = state => state.cart;
export const getCartProductById = ({cart}, productId) => cart.find( product => product.id === productId);

//actions
const createActionName = actionName => `app/cart/${actionName}`;
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const ADD_SAME_PRODUCT= createActionName('ADD_SAME_PRODUCT');
const DELETE_PRODUCT = createActionName('DELETE_{PRODUCT');
const UPDATE_UTY_PRODUCT = createActionName('UPDATE_UTY_PRODUCT');
const UPDATE_NOTE_PRODUCT = createActionName('UPDATE_NOTE_PRODUCT');
const CLEAR_CART = createActionName('CLEAR_CART');

//action creators

export const addProduct = payload => ({type: ADD_PRODUCT, payload});
export const addSameProduct = payload => ({type:ADD_SAME_PRODUCT, payload});
export const deleteProduct = payload => ({type: DELETE_PRODUCT, payload});
export const updateQtyProcut = payload => ({type: UPDATE_UTY_PRODUCT, payload});
export const updateNoteProduct = payload => ({type: UPDATE_NOTE_PRODUCT, payload});
export const clearCart = payload => ({type: CLEAR_CART, payload});

const cartReducer = (statePart = [], action) => {

    switch(action.type){
        case ADD_PRODUCT:
            return [...statePart, action.payload];
        case ADD_SAME_PRODUCT:
            return statePart.map( product => (
                product.id === action.payload.id ? {...product, quantity: product.quantity + action.payload.quantity}: product
            ));
        case DELETE_PRODUCT:
            return statePart.filter( product => product.id !== action.payload);
        case UPDATE_UTY_PRODUCT:
            return statePart.map( product => (
                product.id === action.payload.id ? {...product, quantity: action.payload.quantity}: product
            ));
        case UPDATE_NOTE_PRODUCT:
            return statePart.map( product => (
                product.id === action.payload.id ? {...product, note: action.payload.note}: product
            ));
        case CLEAR_CART:
            return [];
        default:
            return statePart;
    }
};

export default cartReducer;