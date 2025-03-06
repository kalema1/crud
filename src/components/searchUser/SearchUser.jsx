import styles from "./SearchUser.module.css";

export default function SearchUser() {
  return (
    <section className={styles.searchSection}>
      <div className="container">
        <div className={styles.wrapper}>
          <h2 className={`header-secondary ${styles.searchheader}`}>
            Search User
          </h2>
          <form className={styles.searchForm}>
            <input
              type="text"
              placeholder="Name for User"
              className={styles.searchInput}
            />
            <button className={styles.button}>Search User</button>
          </form>
        </div>
      </div>
    </section>
  );
}
