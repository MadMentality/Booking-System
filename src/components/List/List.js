import styles from "./List.module.css";

export function List({ ppl }) {
  return <li className={styles.root}>‣{ppl}</li>;
}
