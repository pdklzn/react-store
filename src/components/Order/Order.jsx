import styles from "./Order.module.css";
import { BsTelegram } from "react-icons/bs";
import { useSelector } from "react-redux";

const Order = () => {
  const products = useSelector((state) => state.products.products);

  const handleClick = () => {
    const copyText = products
      .map(
        (product) =>
          `Товар: ${product.product.name}\n${product.size ? "Размер: " : ""}${
            product.size ? product.size + "\n" : ""
          }Количество: ${product.count}\n========================`
      )
      .join("\n");
    navigator.clipboard
      .writeText(copyText)
      .then(() => {
        window.location.href = "https://t.me/heeheehek";
      })
      .catch((err) => {
        console.error("Error in copying text: ", err);
      });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Как сделать заказ?</h2>
      <div className={styles.info}>
        <div className={styles.blockInfo}>
          <img src="/img/howOrder.jpg" alt="" className={styles.img} />
          <p className={styles.description}>
            Для начала вам нужно выбрать модель
          </p>
        </div>
        <div className={styles.blockInfo}>
          <img
            src="/img/size.jpg"
            alt=""
            style={{ width: "101%" }}
            className={styles.img}
          />
          <p className={styles.description}>
            Определиться с размером вашей модели
          </p>
        </div>
        <div className={styles.blockInfo}>
          <img src="/img/cloth.jpg" alt="" className={styles.img} />
          <p className={styles.description}>
            Вы выбрали модель, размер. Дальше вам нужно оставить заявку на заказ
          </p>
        </div>
        <div className={styles.blockInfo}>
          <BsTelegram className={styles.link} onClick={handleClick} />
          <p className={styles.description}>
            Чтобы оставить заявку, вы должны перейти по ссылке в наш телеграмм
            канал и связаться с продавцом. Товары из вашей корзины автоматически
            скопируются в буфер обмена.
          </p>
        </div>
      </div>
      <div className={styles.question}>
        <h3 className={styles.subTitle}>Дополнительные вопросы</h3>
        <p className={styles.text}>
          Если у вас возникли какие-то проблемы или вопросы, то вы можете
          обратится к нам.
        </p>
        <p className={styles.containerLinkQuestion}>
          <span className={styles.linkQuestion}>popilovasd@mail.ru</span>
          <span className={styles.linkQuestion}>Тел.: +7(903)570-23-47</span>
        </p>
      </div>
    </div>
  );
};

export default Order;
