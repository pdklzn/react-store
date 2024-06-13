import styles from "./Footer.module.css";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className={styles.footer}>
      <div className={styles.logoContainer}>
        <div
          className={styles.logo}
          onClick={() => {
            navigate("/");
            window.scrollTo(0, 0);
          }}
        >
          ZipUp
        </div>
        <div className={styles.ref}>popilovasd@mail.ru</div>
        <div className={styles.ref}>Тел.: +7(903)570-23-47</div>
      </div>
      <div className={styles.map}>
        <YMaps>
          <Map
            defaultState={{
              center: [55.75, 37.57],
              zoom: 9,
              controls: ["zoomControl", "fullscreenControl"],
            }}
            modules={["control.ZoomControl", "control.FullscreenControl"]}
            width={"100%"}
          >
            <Placemark
              modules={["geoObject.addon.balloon"]}
              defaultGeometry={[55.75, 37.57]}
              properties={{
                balloonContentBody: "магазин ZipUp",
              }}
            />
          </Map>
        </YMaps>
      </div>
      <div className={styles.info}>
        <ul className={styles.description}>
          <div className={styles.title}>За покупками</div>
          <li
            onClick={() => {
              navigate("news");
              window.scrollTo(0, 0);
            }}
          >
            Новинки
          </li>
          <li
            onClick={() => {
              navigate("female");
              window.scrollTo(0, 0);
            }}
          >
            Женщинам
          </li>
          <li
            onClick={() => {
              navigate("male");
              window.scrollTo(0, 0);
            }}
          >
            Мужчинам
          </li>
        </ul>
        <ul className={styles.description}>
          <div className={styles.title}>Магазин</div>
          <li
            onClick={() => {
              navigate("about");
              window.scrollTo(0, 0);
            }}
          >
            О нас
          </li>
          <li
            onClick={() => {
              window.location.href = "https://t.me/heeheehek";
            }}
          >
            Доставка и возрват
          </li>
          <li
            onClick={() => {
              window.location.href = "https://t.me/zipuppoizon";
            }}
          >
            Подписаться
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
