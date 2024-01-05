import styles from "./List.module.css";

export function List({ ppl }) {
  return <p className={styles.root}>‣{ppl}</p>;
}
