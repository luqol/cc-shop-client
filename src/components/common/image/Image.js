import styles from './Image.module.scss';
import { IMG_URL } from '../../../config';
import PropTypes from 'prop-types';

const Image = ({name, img}) => {
    return(
        <img
            className={styles.img}
            alt={name}        
            src={`${IMG_URL}images/${img}`} />
    );
};

Image.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
};

export default Image;