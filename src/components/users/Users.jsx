import { IoIosCreate, IoMdTrash } from "react-icons/io";
import { useQuery } from "@tanstack/react-query";

import styles from "./Users.module.css";
import { getUsers } from "../../services/apiUsers";
import LoadingSpinner from "../loader/LoadingSpinner";

export default function Users() {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

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
                        <button className={styles.btn}>
                          <IoIosCreate className={styles.editIcon} />
                        </button>
                        <button className={styles.btn}>
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
