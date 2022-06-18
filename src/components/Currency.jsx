import styles from "../css/Currency.module.css";

const Currency = ({ coin }) => {
  const {
    image,
    name,
    symbol,
    current_price,
    price_change_percentage_24h_in_currency,
    price_change_percentage_7d_in_currency,
  } = coin;

  return (
    <section className={styles.container}>
      <section>
        <section className={styles.imgcontainer}>
          <section>
            <img src={image} style={{ width: 30, height: 30 }} alt="CoinImg" />
          </section>
          <section className={styles.priceContainer}>
            <p>
              {" "}
              <b>{symbol.toUpperCase()} </b>| {name}
            </p>
            <p className={styles.price}>${current_price}</p>
          </section>
        </section>
      </section>
      <section>
        <section className={styles.boxbody}>
          <section>
            <p
              className={styles.changeState}
              style={{
                color:
                  price_change_percentage_24h_in_currency < 0
                    ? "rgb(220, 0, 0)"
                    : "rgb(0, 153, 82)",
              }}
            >
              24h : {price_change_percentage_24h_in_currency?.toFixed(2)}%
            </p>
          </section>
          <section>
            <p
              className={styles.changeState}
              style={{
                color:
                  price_change_percentage_7d_in_currency < 0
                    ? "rgb(220, 0, 0)"
                    : "rgb(0, 153, 82)",
              }}
            >
              7d : {price_change_percentage_7d_in_currency?.toFixed(2)}%
            </p>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Currency;
