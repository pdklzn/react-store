import styles from "./SelectProducts.module.css";
import { useNavigate } from "react-router-dom";

const SelectProducts = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.selectProducts}>
      <section
        className={styles.sectionSelect}
        onClick={() => {
          navigate("female");
          window.scrollTo(0, 0);
        }}
      >
        <img
          src="../../../img/female.jpg"
          alt="Женщины"
          className={styles.img}
        />
        <span className={styles.description}>Товары для женщин</span>
      </section>
      <section
        className={styles.sectionSelect}
        onClick={() => {
          navigate("news");
          window.scrollTo(0, 0);
        }}
      >
        <img src="../../../img/news.jpg" alt="Новинки" className={styles.img} />
        <span className={styles.description}>Новинки</span>
      </section>
      <section
        className={styles.sectionSelect}
        onClick={() => {
          navigate("male");
          window.scrollTo(0, 0);
        }}
      >
        <img src="../../../img/male.jpg" alt="Мужчины" className={styles.img} />
        <span className={styles.description}>Товары для мужчин</span>
      </section>
    </div>
  );
};

export default SelectProducts;
