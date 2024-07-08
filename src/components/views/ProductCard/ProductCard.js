import PropTypes from 'prop-types';
import styles from './ProductCard.module.scss';
import Button from '../../common/Button/Button';
import { useNavigate } from 'react-router-dom';
import Image from '../../common/image/Image';

const ProductCard = ({id, name, price, img}) => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`product/${id}`);
    }

    return(
        <div className={styles.product}>
            <div className={styles.imgContainer}>
                <Image name={name} img={img} />
            </div>
            <div className={styles.body}>
                <div>
                    <h2 className={styles.name}>{name}</h2>
                    <span className={styles.price}>Price: {price} $</span>
                </div>
                <div className={styles.buttonContainer}>
                    <Button action={handleSubmit}>View more...</Button>
                </div>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
};

export default ProductCard;