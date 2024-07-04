import HomeForm from "../../features/HomeForm/HomeForm";
import styles from './Home.module.scss';

const Home = () =>{
    return(
      <main>
        <p className={styles.title}>All products</p>
        <HomeForm />
      </main>
    )
  };
  
  export default Home;