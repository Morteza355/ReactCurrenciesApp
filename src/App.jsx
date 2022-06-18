import { Component } from "react";
import Currencies from "./components/Currencies";
import Pagination from "./components/common/Pagination";
import styles from "./css/App.module.css";
import PreLoader from "./components/common/PreLoader";
import SearchCoins from "./components/SearchCoins";

export default class App extends Component {
  state = {
    coins: [],
    filteredCoins: [],
    userInput: "",
    perPage: 15,
    pageCount: 1,
    page: 1,
    isLoading: true,
    darkTheme: false,
  };

  handleGetCoins = async () => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc%2Cvolume_asc%2C%20volume_desc&per_page=300&sparkline=false&price_change_percentage=24h%2C7d`
    );
    if (response.status !== 200) {
      const message = new Error("a Problem has Been Detected !!");
      throw message;
    } else {
      const data = await response.json();
      this.setState({
        filteredCoins: [...data],
        coins: [...data],
        isLoading: false,
      });
    }
  };

  onSwitchChange = (e) => {
    this.setState({
      darkTheme: e.target.checked,
    });
  };

  componentDidMount() {
    this.handleGetCoins().catch((e) => console.error(e.message));
  }

  handlePageChange = (page) => {
    this.setState({ page });
  };

  onInputChange = (userInput) => {
    this.setState({
      userInput,
    });
    this.handleUserInputDatas(userInput);
  };

  handleUserInputDatas = (userInput) => {
    const { coins } = this.state;
    const copyCoins = [...coins];
    const query = userInput.toLowerCase();
    this.setState({ page: 1 });
    const filteredCoins = copyCoins.filter((coin) => {
      if (userInput === "") {
        return coin;
      } else {
        return coin.name.toLowerCase().includes(query);
      }
    });
    this.setState({
      filteredCoins,
    });
  };

  render() {
    const { filteredCoins, perPage, page, darkTheme, isLoading } = this.state;
    const { handlePageChange, onInputChange, onSwitchChange } = this;

    if (isLoading) return <PreLoader />;

    return (
      <section
        className={styles.container}
        style={{ backgroundColor: darkTheme && "#1a2027" }}
      >
        <SearchCoins
          onSwitchChange={onSwitchChange}
          onInputChange={onInputChange}
          darkTheme={darkTheme}
        />
        <Currencies coins={filteredCoins} perPage={perPage} page={page} />
        <Pagination
          currentPage={page}
          onPageChange={handlePageChange}
          perPage={perPage}
          coins={filteredCoins}
        />
      </section>
    );
  }
}
