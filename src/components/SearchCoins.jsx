import styles from "../css/SearchCoins.module.css";
import classNames from "classnames/bind";
import { useState } from "react";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";

let cx = classNames.bind(styles);

const SearchCoins = ({ onSwitchChange, darkTheme, onInputChange }) => {
	const [focus, setFocus] = useState(false);

	const inputClass = cx({
		inputContainer: true,
		focusedInput: focus,
	});

	return (
		<section className={styles.container}>
			<section className={inputClass}>
				<input
					className={styles.searchInput}
					style={{
						borderColor: darkTheme && "rgb(210, 210, 210)",
						color: darkTheme && "rgb(210, 210, 210)",
					}}
					placeholder="Search Coins..."
					onChange={(e) => onInputChange(e.target.value)}
					onFocus={() => setFocus(true)}
					onBlur={() => setFocus(false)}
				/>
			</section>
			<section>
				<input
					onChange={(e) => onSwitchChange(e)}
					type="checkbox"
					id="checkbox"
					hidden
				/>
				<label htmlFor="checkbox">
					<section
						className={styles.checkboxContainer}
						style={{
							color: darkTheme
								? "rgb(210, 210, 210)"
								: "rgb(0, 25, 54)",
						}}
					>
						{darkTheme ? <BsFillSunFill /> : <BsMoonFill />}
					</section>
				</label>
			</section>
		</section>
	);
};

export default SearchCoins;
