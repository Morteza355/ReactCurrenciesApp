import Currency from "./Currency";
import styles from "../css/Currencies.module.css";
import { handlePageDatas } from "../utils/paginate.js";

const Currencies = ({ coins, perPage, page }) => {
  const datas = handlePageDatas(coins, perPage, page);

  return (
    <section className={styles.container}>
      {datas.map((coin) => (
        <Currency coin={coin} key={coin.id} />
      ))}
    </section>
  );
};
export default Currencies;
