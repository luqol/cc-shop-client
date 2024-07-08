import { useNavigate, useParams } from 'react-router-dom';
import styles from './SpForm.module.scss';
import { useSelector } from 'react-redux';
import { getProductById } from '../../../redux/productsRedux';
import Button from '../../common/Button/Button';
import { useState } from 'react';
import Image from '../../common/image/Image';
import Quantity from '../../common/Quantity/Quantity';


const SpForm = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const product = useSelector(state => getProductById(state, id));

    const [mainImg, setMainImg] = useState(product.images[0].img);
    const [price, setPrice] = useState(product.price);
    const [quantity, setQuantity] = useState(1);

    const changeImg = (newImg) => {
        const url = new URL (newImg);
        const filename = url.pathname.split('/').pop();
        setMainImg(filename);
    }

    const plus = (e) => {
        e.preventDefault();
        const newQ = quantity+1;
        setQuantity(newQ);
        setPrice(newQ*product.price)
    }  
    const minus = (e) => {
        e.preventDefault();
        const newQ = quantity-1;
        if( newQ <= 0){
            setQuantity(0);
            setPrice(0);
        } else{
            setQuantity(newQ);
            setPrice(newQ*product.price)
        }
    }  

    const addToCart = (e) => {
        e.preventDefault();
        console.log('Add to cart');


        //navigate('/cart')
    }

    return(
        <div className={styles.spForm}>
            <div className={styles.header}>
                <h2 className={styles.title}> {product.name} </h2>
                <span className={styles.price}> Price: {product.price} $</span>
            </div>
            <div className={styles.imgesContainer}>
                <div className={styles.mainImgContainer}>
                    <div className={styles.imgContainer}>
                        <Image name={product.name} img={mainImg} action={changeImg} />
                    </div>
                </div>
                <div className={styles.otherImgContainer}>
                        { product.images.map(
                            image => 
                                <div className={styles.imgContainer} key={image.id}>
                                    <Image name={image.name} img={image.img} action={changeImg} />
                                </div>
                        )}
                </div>
            </div>
            <div className={styles.description}>
                <h4>Description</h4>
                <span>{product.description}</span>
            </div>
            <div className={styles.addToCartContainer}>
                <div className={styles.totalPrice}>
                    <span className={styles.price}> Total price: {price} $</span>
                </div>
                <div className={styles.quantityContainer}>
                    <Quantity plusAction={plus} minusAction={minus} quantity={quantity} />
                </div>
                <div className={styles.buttonContainer}>
                    <Button action={addToCart}>Add to Cart</Button>
                </div>
            </div>
        </div>
    );
};

export default SpForm;