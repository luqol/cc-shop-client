import styles from './Button.module.scss'
import PropTypes from 'prop-types';

const Button = ({children, action}) => {
    return (
        <button type='submit' className={styles.button} onClick={action}>{children}</button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    action: PropTypes.func,
};

export default Button;