import ShowProducts from "../ShowProducts/ShowProducts";
import styles from "./Male.module.css";

const Male = () => {
  return (
    <>
      <h2 className={styles.title}>Товары для мужчин</h2>
      <ShowProducts sex={"Male"} news={false} />
    </>
  );
};

export default Male;
