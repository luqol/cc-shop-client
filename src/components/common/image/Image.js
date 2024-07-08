import styles from './Image.module.scss';
import { IMG_URL } from '../../../config';
import PropTypes from 'prop-types';

const Image = ({name, img, action}) => {
    return(
        <img
            className={styles.img}
            alt={name}       
            src={`${IMG_URL}images/${img}`} 
            onClick = {e => action(e.target.src)}
        />
    );
};

Image.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    action: PropTypes.func,
};

export default Image;