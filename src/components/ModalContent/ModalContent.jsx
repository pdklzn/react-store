import { useState } from "react";
import styles from "./ModalContent.module.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/productSlice";

const ModalContent = ({ product, setModalActive }) => {
  const dispatch = useDispatch();

  const [activeImg, setActiveImg] = useState(0);
  const [selectedSize, setSelectedSize] = useState([]);

  const handleSelectSize = (size) => {
    if (selectedSize.includes(size)) {
      setSelectedSize(selectedSize.filter((el) => el !== size));
    } else setSelectedSize([...selectedSize, size]);
  };
  return (
    <div className={styles.content}>
      <div className={styles.selectImg}>
        {product.images.map((img, i) => (
          <img
            src={img}
            alt="фото"
            className={
              i === activeImg
                ? `${styles.img} ${styles.active}`
                : `${styles.img}`
            }
            key={i}
            onClick={() => setActiveImg(i)}
          />
        ))}
      </div>
      <div className={styles.containerImg}>
        <img
          src={product.images[activeImg]}
          alt="фото"
          className={styles.selectedImg}
        />
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{product.name}</h3>
        <p className={styles.price}>{product.price} ₽</p>
        {product.size.length !== 0 && (
          <div className={styles.size}>
            <div>
              Выберите размер
              {product.type === "Sneakers" && (
                <span style={{ fontWeight: 600 }}> EU</span>
              )}
            </div>
            <div className={styles.containerSelectSize}>
              {product.size.map((size, i) => (
                <span
                  key={i}
                  className={
                    selectedSize.includes(size)
                      ? `${styles.selectSize} ${styles.activeSelected}`
                      : `${styles.selectSize}`
                  }
                  onClick={() => handleSelectSize(size)}
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        )}

        <button
          className={styles.btn}
          onClick={() => {
            if (product.size.length) {
              selectedSize.forEach((size) => {
                dispatch(addProduct({ product, size }));
              });
            } else dispatch(addProduct({ product, size: null }));
            setModalActive(false);
          }}
          disabled={selectedSize.length === 0 && product.size.length !== 0}
        >
          Добавить в корзину
        </button>
      </div>
    </div>
  );
};

export default ModalContent;
