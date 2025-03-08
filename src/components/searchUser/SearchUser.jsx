import { useContext } from "react";
import styles from "./SearchUser.module.css";
import { UserContext } from "../../context/UserContext";

export default function SearchUser() {
  const { searchRef, handleSearch, searchTerm, handleSearchInputChange } =
    useContext(UserContext);
  return (
    <section className={styles.searchSection}>
      <div className="container">
        <div className={styles.wrapper}>
          <h1 className={styles.headingPrimary}>USER MANAGEMENT</h1>
          <h2 className={`header-secondary ${styles.searchheader}`}>
            Search User
          </h2>
          <form
            ref={searchRef}
            className={styles.searchForm}
            onSubmit={handleSearch}
          >
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchInputChange}
              placeholder="Search Users by Name"
              className={styles.searchInput}
            />
            <button className={styles.button}>Search User</button>
          </form>
        </div>
      </div>
    </section>
  );
}
