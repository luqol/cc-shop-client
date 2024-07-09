import { useState } from 'react';
import Button from '../../common/Button/Button';
import Quantity from '../../common/Quantity/Quantity';
import styles from './CartProductCard.module.scss';
import { useDispatch } from 'react-redux';
import { deleteProduct, updateQtyProcut } from '../../../redux/cartRedux';

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
        dispatch(updateQtyProcut({id: id, quantity: newQ}));
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
            dispatch(updateQtyProcut({id: id, quantity: newQ}));
        }
    }

    const delHandle = (e) => {
        e.preventDefault();
        dispatch(deleteProduct(id));
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
                <textarea placeholder='Comments' value={note}  onChange={e => setNote(e.target.value)} cols={50}/>
            </div>
        </div>
    );
};

export default CartProductCard;