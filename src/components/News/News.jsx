import ShowProducts from "../ShowProducts/ShowProducts";
import styles from "./News.module.css";

const News = () => {
  return (
    <>
      <h2 className={styles.title}>Новинки</h2>
      <ShowProducts sex={"Unisex"} news={true} />
    </>
  );
};

export default News;
