import styles from "./AddUser.module.css";

export default function AddUser() {
  return (
    <section className={styles.addUserSection}>
      <div className="container">
        <form>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <button>Add</button>
        </form>
      </div>
    </section>
  );
}
