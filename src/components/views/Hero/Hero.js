import styles from './Hero.module.scss';

const Hero = () => {
    return(
        <div className={styles.hero}>
            <h1 className={styles.title}>Click Craft 3d</h1>
            <p className={styles.subtitle}>Odkryj świat druku 3D z naszymi produktami</p>
        </div>
    );
};

export default Hero;