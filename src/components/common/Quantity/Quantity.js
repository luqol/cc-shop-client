import styles from './Quantity.module.scss';
import PropTypes from 'prop-types';

const Quantity = ({plusAction, minusAction, quantity}) => {
    return(
        <div className={styles.quantityContainer}>
            <span className={styles.quantity} >Quantity: 
                <button className={styles.plusminusBtn} onClick={minusAction} type='submit'>-</button>
                {quantity}
                <button className={styles.plusminusBtn} onClick={plusAction} type='submit'>+</button>
            </span>
        </div>
    );
};

Quantity.propTypes = {
    plusAction: PropTypes.func.isRequired,
    minusAction: PropTypes.func.isRequired,
    quantity: PropTypes.number.isRequired,
};

export default Quantity;

