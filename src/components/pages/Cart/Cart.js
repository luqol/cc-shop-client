import CartForm from '../../features/CartForm/CartForm';
import styles from './Cart.module.scss';

const Cart = () =>{
    return(
      <main>
        <h4 className={styles.title}>Cart</h4>
        <CartForm />
      </main>
    );
  };
  
  export default Cart;