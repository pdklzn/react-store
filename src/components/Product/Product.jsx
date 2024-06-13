import { useState } from "react";
import styles from "./Product.module.css";
import Modal from "../UI/Modal/Modal";
import ModalContent from "../ModalContent/ModalContent";

const Product = ({ product }) => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className={styles.product}>
      <div className={styles.imgContainer} onClick={() => setModalActive(true)}>
        <img src={product.images[0]} alt="товар" className={styles.img} />
      </div>
      <p className={styles.price}>{product.price} ₽</p>
      <p className={styles.name}>{product.name}</p>
      <Modal active={modalActive} setActive={setModalActive}>
        <ModalContent product={product} setModalActive={setModalActive} />
      </Modal>
    </div>
  );
};

export default Product;
