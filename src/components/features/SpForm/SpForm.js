import { useParams } from 'react-router-dom';
import styles from './SpForm.module.scss';
import { useSelector } from 'react-redux';
import { getProductById } from '../../../redux/productsRedux';
import Button from '../../common/Button/Button';
import { IMG_URL } from '../../../config';
import { useState } from 'react';

const SpForm = () => {

    const { id } = useParams();

    const product = useSelector(state => getProductById(state, id));

    const [mainImg, setMainImg] = useState(product.images[0].img);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('add to cart');
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
                        <img
                            className={styles.img}
                            alt={product.name}
                            src={`${IMG_URL}images/${mainImg}`} /> 
                    </div>
                </div>
                <div className={styles.otherImgContainer}>

                </div>
            </div>
            <div className={styles.description}>
                <h4>Description</h4>
                <span>{product.description}</span>
            </div>
            <div className={styles.addToCartContainer}>
                <div className={styles.quantity}>

                </div>
                <div className={styles.buttonContainer}>
                    <Button action={handleSubmit}>Add to Cart</Button>
                </div>
            </div>
        </div>
    );
};

export default SpForm;