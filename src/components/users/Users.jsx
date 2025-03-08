import { IoIosCreate, IoMdTrash } from "react-icons/io";

import styles from "./Users.module.css";
import LoadingSpinner from "../loader/LoadingSpinner";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function Users() {
  const { isLoading, users, error, isDeleting, handleDeleteUser, handleEdit } =
    useContext(UserContext);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className={styles.errorMessage}>
        Error Occured during fetching data
      </div>
    );
  }

  return (
    <section className={styles.usersSection}>
      <div className="container">
        <div className={styles.wrapper}>
          <h2 className={`header-secondary ${styles.userheading}`}>
            List Of Users
          </h2>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHeader}>Name</th>
                  <th className={styles.tableHeader}>Email</th>
                  <th className={styles.tableHeader}>Phone</th>
                  <th className={styles.tableHeader}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className={styles.tableRow}>
                    <td className={styles.tableData}>{user.name}</td>
                    <td className={styles.tableData}>{user.email}</td>
                    <td className={styles.tableData}>{user.phone}</td>
                    <td className={styles.tableData}>
                      <div className={styles.btnWrapper}>
                        <button
                          onClick={() => handleEdit(user)}
                          className={styles.btn}
                        >
                          <IoIosCreate className={styles.editIcon} />
                        </button>
                        <button
                          onClick={() => handleDeleteUser(user.id)}
                          className={styles.btn}
                          disabled={isDeleting}
                        >
                          <IoMdTrash className={styles.deleteIcon} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
