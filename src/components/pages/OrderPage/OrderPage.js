import OrderForm from '../../features/OrderForm/OrderForm';
import styles from './OrderPage.module.scss';

const OrderPage = () =>{
    return(
      <main>
      <h4 className={styles.title}>Order</h4>
       <OrderForm />
    </main>
    )
  };
  
  export default OrderPage;