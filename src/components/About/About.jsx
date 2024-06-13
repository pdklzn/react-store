import styles from "./About.module.css";
import { FaStore } from "react-icons/fa";
// import { FaTruckFast } from "react-icons/fa";
import { AiOutlineMoneyCollect } from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";

const About = () => {
  return (
    <>
      <h2 className={styles.title}>Наш магазин</h2>
      <div className={styles.content}>
        <p className={styles.about}>
          Наша компания, ZipUp, рада предложить Вам уникальную возможность
          заказывать высококачественные брендовые товары напрямую из Китая. Мы
          специализируемся на организации доставки и импорте товаров из Китая,
          чтобы предоставить Вам доступ к самым трендовым и модным вещам прямо у
          Вас в стране.
        </p>
        <img src="/img/about.jpg" alt="about" className={styles.img} />
      </div>
      <div className={styles.info}>
        <div className={styles.description}>
          <FaStore className={styles.icon} />
          <p className={styles.text}>Надежно</p>
        </div>
        <div className={styles.description}>
          <FaShippingFast className={styles.icon} />
          <p className={styles.text}>Быстро</p>
        </div>
        <div className={styles.description}>
          <AiOutlineMoneyCollect className={styles.icon} />
          <p className={styles.text}>Доступно</p>
        </div>
      </div>
    </>
  );
};

export default About;
