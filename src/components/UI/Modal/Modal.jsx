import styles from "./Modal.module.css";

const Modal = ({ active, setActive, children }) => {
  return (
    <div
      className={
        active ? `${styles.modal} ${styles.active}` : `${styles.modal}`
      }
      onClick={() => setActive(false)}
    >
      <div
        className={
          active ? `${styles.content} ${styles.active}` : `${styles.content}`
        }
        style={{ width: "50vw" }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <div
          className={styles.closeModal}
          onClick={() => setActive(false)}
        ></div>
      </div>
    </div>
  );
};

export default Modal;
