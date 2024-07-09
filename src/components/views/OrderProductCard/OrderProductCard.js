import styles from './OrderProductCard.module.scss';
import PropTypes from 'prop-types';

const OrderProductCard = ({name, quantity, price, note}) => {
    return(
        <div className={styles.productContainer}>
            <div className={styles.body}>
                <h4 className={styles.title}> {name} </h4>
                <span className={styles.price}>Totlal price: {price} $</span>
                <span className={styles.qty}>Quantity: {quantity}</span>
                <span className={styles.note}>Note: {note} </span>
            </div>
        </div>
    );
};

OrderProductCard.propTypes = {
    note: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.string.isRequired,
};


export default OrderProductCard;