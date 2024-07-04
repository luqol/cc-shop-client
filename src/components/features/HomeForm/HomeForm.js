import { useSelector } from 'react-redux';
import styles from './HomeForm.module.scss';
import { getAllProducts } from '../../../redux/productsRedux';
import { Row, Spinner } from 'react-bootstrap';
import ProductCard from '../../views/ProductCard/ProductCard';

const HomeForm = () => {

    const allProducts = useSelector( getAllProducts);
    console.log(allProducts);

    return(
        <Row className={styles.list}>
            {
                allProducts.map( product => 
                    <ProductCard  key={product.id} id={product.id} name={product.name} price={product.price} img={product.images[0].img}  />
                )
            }
            {!allProducts.length && <Spinner className=" m-auto"/>}
        </Row>
    );
};

export default HomeForm;