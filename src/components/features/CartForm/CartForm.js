import { useSelector } from 'react-redux';
import Button from '../../common/Button/Button';
import styles from './CartForm.module.scss';
import { Row} from 'react-bootstrap';
import { getCart } from '../../../redux/cartRedux';
import CartProductCard from '../CartProductCard/CartProductCard';
import { useNavigate } from 'react-router-dom';

const CartForm = () => {

    const products = useSelector(getCart);
    const navigate = useNavigate();

    const orderHandle = (e) =>{
        e.preventDefault();
        console.log('order');

        navigate('/order')
    };

    return(
        <div className={styles.cartForm}>
            <Row className={styles.list}>
                {
                    products.map( product => 
                        <CartProductCard key={product.id} id={product.id} name={product.name} sNote={product.note} qty={product.quantity} singlePrice={product.price}/>
                    )
                }
            </Row>
            {!products.length && <span className={styles.noProducts}>No products...</span>}
            <div className={styles.buttonContainer}>
                <Button action={orderHandle}>Order</Button>
            </div>
        </div>
    );
};

export default CartForm;