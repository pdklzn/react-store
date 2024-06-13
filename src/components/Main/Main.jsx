import ShowProducts from "../ShowProducts/ShowProducts";
import SelectProducts from "../SelectProducts/SelectProducts";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <main>
      <h1 className={styles.title}>ZipUp</h1>
      <h3 className={styles.subTitle}>
        <span className={styles.bg}></span>
        <span className={styles.text}>Погрузись в мир моды</span>
      </h3>
      <SelectProducts />
      <ShowProducts sex={"Unisex"} new={false} title={"Все товары"} />
    </main>
  );
};

export default Main;
