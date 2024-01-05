import styles from "./Attendents.module.css";
import { List } from "../List/List";

export function Attendents({ newFakeAttendents }) {
  return (
    <div className={styles.root}>
      <p>BOARDING LIST:</p>
      <div>
        <ul className={styles.list}>
          {newFakeAttendents.map((ppl) => (
            <List ppl={ppl.name} key={ppl.name} />
          ))}
        </ul>
      </div>
      <p>NOT YET RESPONDED:</p>
      <div>
        <ul className={styles.list}>
          {newFakeAttendents
            .filter((ppl) => !ppl.responsed)
            .map((ppl) => (
            <List ppl={ppl.name} />
          ))}
        </ul>
      </div>
    </div>
  );
}
