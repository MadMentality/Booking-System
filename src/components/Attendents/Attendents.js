import styles from "./Attendemts.module.css";
import { List } from "../List/List";

export function Attendents({ newFakeAttendents }) {
  return (
    <div className={styles.root}>
      <p>BOARDING LIST:</p>
      <div>
        {newFakeAttendents.map((ppl) => (
          <List ppl={ppl.name} key={ppl.name} />
        ))}
      </div>
      <p>NOT YET RESPONDED:</p>
      <div>
        {newFakeAttendents
          .filter((ppl) => !ppl.responsed)
          .map((ppl) => (
            <List ppl={ppl.name} />
          ))}
      </div>
    </div>
  );
}
