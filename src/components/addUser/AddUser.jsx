import styles from "./AddUser.module.css";

export default function AddUser() {
  return (
    <section className={styles.addUserSection}>
      <div className="container">
        <div className={styles.wrapper}>
          <h2 className={`header-secondary ${styles.headingAddUser}`}>
            Add/Edit User
          </h2>
          <form className={styles.form}>
            <input
              type="text"
              placeholder="Name"
              className={styles.addUserInput}
            />
            <input
              type="text"
              placeholder="Email"
              className={styles.addUserInput}
            />
            <input
              type="text"
              placeholder="Phone"
              className={styles.addUserInput}
            />
            <button className={styles.btn}>Add User</button>
          </form>
        </div>
      </div>
    </section>
  );
}
