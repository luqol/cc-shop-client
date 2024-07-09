

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
const UPDATE_CART = createActionName('UPDATE_CART');

//action creators

export const updateCart = payload => ({type:UPDATE_CART, payload});
export const updateCartLocal = () => {
    return (dispatch) => {
        let cart = localStorage.getItem('cart');

        if (!cart) {
            cart = [];
        } else {
            cart = JSON.parse(cart);
        }

        dispatch(updateCart(cart));
    };
};

export const addProduct = payload => ({type: ADD_PRODUCT, payload});
export const addProductLocal = (newProduct) => {
    return (dispatch) => {

        let cart = localStorage.getItem('cart');

        if (!cart) {
            cart = [];
        } else {
            cart = JSON.parse(cart);
        }

        cart.push(newProduct);

        localStorage.setItem('cart', JSON.stringify(cart));

        dispatch(addProduct(newProduct));
    };
};


export const addSameProduct = payload => ({type:ADD_SAME_PRODUCT, payload});
export const addSameProductLocal = (newProduct) => {
    return (dispatch) => {
        let cart = JSON.parse(localStorage.getItem('cart'));
        
        cart = cart.map( product => (
            product.id === newProduct.id ? {...product, quantity: product.quantity + newProduct.quantity} : product
        ));

        localStorage.setItem('cart', JSON.stringify(cart));

        dispatch(addSameProduct(newProduct));
    };
};

export const deleteProduct = payload => ({type: DELETE_PRODUCT, payload});
export const deleteProductLocal = (id) => {
    return (dispatch) =>  {
        let cart = JSON.parse(localStorage.getItem('cart'));

        cart = cart.filter( product => product.id !== id);

        localStorage.setItem('cart', JSON.stringify(cart));

        dispatch(deleteProduct(id));
    };
};

export const updateQtyProcut = payload => ({type: UPDATE_UTY_PRODUCT, payload});
export const updateQtyProcutLocal = payload => {
    return (dispatch) => {
        let cart = JSON.parse(localStorage.getItem('cart'));

        cart = cart.map(product => (
            product.id === payload.id ? { ...product, quantity: payload.quantity} : product
        ));

        localStorage.setItem('cart', JSON.stringify(cart));

        dispatch(updateQtyProcut(payload));
    };
};


export const updateNoteProduct = payload => ({type: UPDATE_NOTE_PRODUCT, payload});
export const updateNoteProductLocal = payload => {
    return (dispatch) => {
        let cart = JSON.parse(localStorage.getItem('cart'));

        cart = cart.map(product => (
            product.id === payload.id ? { ...product, note: payload.note} : product
        ));

        localStorage.setItem('cart', JSON.stringify(cart));

        dispatch(updateNoteProduct(payload));

    };
};

export const clearCart = () => ({type: CLEAR_CART});
export const clearCartLocal = () => {
    return (dispatch) => {
        localStorage.removeItem('cart');
        console.log('clear');
        dispatch(clearCart());
        
    };
};

const cartReducer = (statePart = [], action) => {

    switch(action.type){
        case UPDATE_CART:
            return [...action.payload];
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