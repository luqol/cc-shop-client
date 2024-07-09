import { useSelector } from 'react-redux';
import styles from './OrderForm.module.scss';
import { getCart } from '../../../redux/cartRedux';
import { Row } from 'react-bootstrap';
import OrderProductCard from '../../views/OrderProductCard/OrderProductCard';
import Button from '../../common/Button/Button';

const OrderForm = () => {
    const orderedProducts = useSelector(getCart);


    const orderHandler = (e) => {
        e.preventDefault();
        console.log('order');
    }
    return(
        <div className={styles.order}>
            <div className={styles.orderedProducts}>
                <Row className={styles.list}>
                    {
                        orderedProducts.map( product => 
                            <OrderProductCard key={product.id} name={product.name} quantity={product.quantity} note={product.note} price={product.price} />
                        )
                    }
                </Row>
            </div>
            <div className={styles.totalPrice}>

            </div>
            <div className={styles.form}>

            </div>
            <div className={styles.btnContainer}>
                <Button action={orderHandler}>Order</Button>
            </div>
        </div>
    );
};

export default OrderForm;