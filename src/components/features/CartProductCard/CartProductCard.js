import { useState } from 'react';
import Button from '../../common/Button/Button';
import Quantity from '../../common/Quantity/Quantity';
import styles from './CartProductCard.module.scss';
import { useDispatch } from 'react-redux';
import { deleteProductLocal, updateNoteProductLocal, updateQtyProcutLocal } from '../../../redux/cartRedux';
import PropTypes from 'prop-types';

const CartProductCard = ({id, name, sNote, qty, singlePrice}) => {

    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(qty);
    const [price, setPrice] = useState(qty * singlePrice);
    const [note, setNote] = useState(sNote);

    const plus = (e) => {
        e.preventDefault();
        const newQ = quantity+1;
        setQuantity(newQ);
        setPrice(newQ*singlePrice);
        dispatch(updateQtyProcutLocal({id: id, quantity: newQ}));
    }  
    const minus = (e) => {
        e.preventDefault();
        const newQ = quantity-1;
        if( newQ <= 0){
            setQuantity(0);
            setPrice(0);
        } else{
            setQuantity(newQ);
            setPrice(newQ*singlePrice);
            dispatch(updateQtyProcutLocal({id: id, quantity: newQ}));
        }
    }

    const delHandle = (e) => {
        e.preventDefault();
        dispatch(deleteProductLocal(id));
    }

    const noteHandler = (e) => {
        setNote(e.target.value);
        dispatch(updateNoteProductLocal({id:id, note:e.target.value}))
    }

    return (
        <div className={styles.cpc}>
            <h2 className={styles.name}>{name}</h2>
            <div className={styles.btnContainer}>
                <span className={styles.price}>Total price: {price} $</span>
                <Quantity quantity={quantity} plusAction={plus} minusAction={minus}/>
                <Button action={delHandle}>del</Button>
            </div>
            <div className={styles.noteContainer}>
                <label>Your note: </label>
                <textarea placeholder='Comments' value={note}  onChange={noteHandler} cols={50}/>
            </div>
        </div>
    );
};

CartProductCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    singlePrice: PropTypes.number.isRequired,
    qty: PropTypes.string.isRequired,
    sNote: PropTypes.string.isRequired,
};


export default CartProductCard;