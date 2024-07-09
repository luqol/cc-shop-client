import { useSelector } from 'react-redux';
import styles from './OrderForm.module.scss';
import { getCart } from '../../../redux/cartRedux';
import { Row } from 'react-bootstrap';
import OrderProductCard from '../../views/OrderProductCard/OrderProductCard';
import Button from '../../common/Button/Button';
import { useState } from 'react';
import { API_URL } from '../../../config';

const OrderForm = () => {
    const products = useSelector(getCart);

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const totalPrice = () => {
        let price = 0;
        for ( let  product of products){
            price = price + (product.price * product.quantity);
        }
        return price;
    };

    const orderHandler = (e) => {
        e.preventDefault();
        console.log('order');
        const orderProducts = [];

        for( let product of products){
            orderProducts.push({
                productId: product.id,
                note: product.note,
                quantity: product.quantity,
            })
        };

        const order = {
            clientName: `${name} ${lastName}`,
            email: email,
            address: address,
            phone: parseInt(phone),
            orderProducts: orderProducts,
        };

        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(order),
        };

        fetch(`${API_URL}/orders`, option)
        .then( res => {
            if (res.ok){
                console.log('ok');
                return res.json();
            }else {
                console.log('error', res.status);
            }
        });
    };

    return(
        <div className={styles.order}>
            <div className={styles.orderedProducts}>
                <Row className={styles.list}>
                    {
                        products.map( product => 
                            <OrderProductCard key={product.id} name={product.name} quantity={product.quantity} note={product.note} price={product.price} />
                        )
                    }
                </Row>
            </div>
            <div className={styles.totalPrice}>
                <span className={styles.totalPrice}>Total price: {totalPrice()} $</span>
            </div>
            <div className={styles.form}>
                <form>
                    <div className={styles.formGroup}>
                        <label for='fname'>First name: </label>
                        <input type='text' id='fname' name='name' value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div className={styles.formGroup}>
                        <label for='flastName'>Last name: </label>
                        <input type='text' id='flastName' name='lastName' value={lastName} onChange={e => setLastName(e.target.value)}/>
                    </div>
                    <div className={styles.formGroup}>
                        <label for='faddress'>Address: </label>
                        <input type='text' id='faddress' name='address' value={address} onChange={e => setAddress(e.target.value)}/>
                    </div>
                    <div className={styles.formGroup}>
                        <label for='fphone'>Phone: </label>
                        <input type='tel' id='fpfone' name='phone' value={phone} onChange={e => setPhone(e.target.value)}/>
                    </div>
                    <div className={styles.formGroup}>
                        <label for='femail'>Email: </label>
                        <input type='email' id='femail' name='email' value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>
                    

                    <div className={styles.btnContainer}>
                        <Button action={orderHandler}>Order</Button>
                    </div>
                </form>
            </div>
            
        </div>
    );
};

export default OrderForm;