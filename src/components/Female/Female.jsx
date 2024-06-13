import ShowProducts from "../ShowProducts/ShowProducts";
import styles from "./Female.module.css";

const Female = () => {
  return (
    <>
      <h2 className={styles.title}>Товары для женщин</h2>
      <ShowProducts sex={"Female"} news={false} />
    </>
  );
};

export default Female;
