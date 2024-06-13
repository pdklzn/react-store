import Product from "../Product/Product";
import styles from "./ShowProducts.module.css";
import goods from "../../data/db";

const ShowProducts = ({ sex, news, title }) => {
  const allGoods = [...goods.sneakers, ...goods.clothes, ...goods.accessories];
  return (
    <div className={styles.showProducts}>
      {title && (
        <h2 className={styles.title} id="refScroll">
          {title}
        </h2>
      )}
      <section className={styles.products}>
        {allGoods
          .filter((good) => {
            if (sex === "Unisex") return true;
            else return sex === good.sex;
          })
          .filter((good) => !news || good.new)
          .map((good) => (
            <Product product={good} key={good.id} />
          ))}
      </section>
    </div>
  );
};

export default ShowProducts;
