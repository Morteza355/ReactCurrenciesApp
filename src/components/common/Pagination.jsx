import { range } from "lodash";
import styles from "../../css/Pagination.module.css";

const Pagination = ({ coins, perPage, currentPage, onPageChange }) => {
  const pages = Math.ceil(coins.length / perPage);
  const page = range(1, pages + 1);
  if (pages === 1) return null;

  return (
    <div>
      <nav>
        <ul className={styles.pagination}>
          {page.map((page) => (
            <li
              style={{
                backgroundColor: currentPage === page && "rgb(0, 39, 87)",
              }}
              onClick={() => onPageChange(page)}
              key={page}
            >
              {page}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
