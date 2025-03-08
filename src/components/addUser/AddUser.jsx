import { useContext } from "react";

import styles from "./AddUser.module.css";
import { UserContext } from "../../context/UserContext";

export default function AddUser() {
  const { handleAddOrUpdateUser, formState, dispatch, editingUser } =
    useContext(UserContext);

  return (
    <section className={styles.addUserSection}>
      <div className="container">
        <div className={styles.wrapper}>
          <h2 className={`header-secondary ${styles.headingAddUser}`}>
            Add/Edit User
          </h2>
          <form onSubmit={handleAddOrUpdateUser} className={styles.form}>
            <input
              type="text"
              placeholder="Name"
              value={formState.name}
              onChange={(e) =>
                dispatch({
                  type: "SET_FIELD",
                  field: "name",
                  value: e.target.value,
                })
              }
              className={styles.addUserInput}
            />
            <input
              type="text"
              placeholder="Email"
              value={formState.email}
              onChange={(e) =>
                dispatch({
                  type: "SET_FIELD",
                  field: "email",
                  value: e.target.value,
                })
              }
              className={styles.addUserInput}
            />
            <input
              type="text"
              placeholder="Phone"
              value={formState.phone}
              onChange={(e) =>
                dispatch({
                  type: "SET_FIELD",
                  field: "phone",
                  value: e.target.value,
                })
              }
              className={styles.addUserInput}
            />
            <button className={styles.btn}>
              {editingUser ? "Edit User" : "Add user"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
