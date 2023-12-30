import styles from "./EventDate.module.css";
import { fakeEvent } from "../../App";

export function EventDate() {
  return (
    <div className={styles.eventDate}>
      <h2>DATE: {fakeEvent.eveDate}</h2>
      <h2>TIME: {fakeEvent.eveTime}</h2>
    </div>
  );
}
