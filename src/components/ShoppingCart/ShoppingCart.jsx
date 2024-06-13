import { useDispatch, useSelector } from "react-redux";
import styles from "./ShoppingCart.module.css";
import { AiOutlineRight } from "react-icons/ai";
import { removeProduct, changeCountProduct } from "../../store/productSlice";
import { Link } from "react-router-dom";

const ShoppingCart = ({ active, setActive }) => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleMinus = (product) => {
    const count = product.count - 1;
    if (count !== 0) {
      dispatch(
        changeCountProduct({
          product: product.product,
          count: product.count - 1,
          size: product.size,
        })
      );
    } else {
      dispatch(
        removeProduct({
          product: product.product,
          size: product.size,
        })
      );
    }
  };

  const handlePlus = (product) => {
    dispatch(
      changeCountProduct({
        product: product.product,
        count: product.count + 1,
        size: product.size,
      })
    );
  };

  return (
    <div
      className={active ? `${styles.cart} ${styles.active}` : `${styles.cart}`}
      onClick={() => setActive(false)}
    >
      <div
        className={
          active ? `${styles.content} ${styles.active}` : `${styles.content}`
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {" "}
          <div className={styles.title}>
            <AiOutlineRight
              className={styles.close}
              onClick={() => setActive(false)}
            />
            Корзина
          </div>
          <div className={styles.products}>
            {products.length === 0 ? (
              <div className={styles.empty}>Корзина пуста</div>
            ) : (
              products.map((product, i) => (
                <div className={styles.product} key={i}>
                  <img
                    src={product.product.images[0]}
                    alt="img"
                    className={styles.img}
                  />
                  <div className={styles.info}>
                    <h5 className={styles.titleProduct}>
                      {product.product.name}
                    </h5>
                    {product.size && (
                      <p className={styles.size}>
                        Размер:{" "}
                        <span style={{ fontWeight: 500 }}>{product.size}</span>
                      </p>
                    )}
                    <p className={styles.price}>{product.product.price} руб.</p>
                    <div className={styles.count}>
                      <span
                        className={styles.minus}
                        onClick={() => {
                          handleMinus(product);
                        }}
                      >
                        -
                      </span>
                      <span>{product.count}</span>
                      <span
                        className={styles.plus}
                        onClick={() => {
                          handlePlus(product);
                        }}
                      >
                        +
                      </span>
                    </div>
                  </div>
                  <div
                    className={styles.remove}
                    onClick={() => {
                      dispatch(
                        removeProduct({
                          product: product.product,
                          size: product.size,
                        })
                      );
                    }}
                  ></div>
                </div>
              ))
            )}
          </div>
        </div>
        <div>
          {products.length !== 0 && (
            <>
              <div className={styles.sum}>
                Сумма:{" "}
                {products.reduce((acc, product) => {
                  return acc + product.product.price * product.count;
                }, 0)}{" "}
                руб.
              </div>
              <Link
                to={"order"}
                className={styles.btn}
                onClick={() => {
                  setActive(false);
                  window.scrollTo(0, 0);
                }}
              >
                Оформить заказ
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
