import styles from "./LoadingSpinner.module.css";

export default function LoadingSpinner() {
  return (
    <div>
      <span class={styles.loader}></span>
    </div>
  );
}
