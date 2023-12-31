import styles from "./EventDate.module.css";
import { fakeEvent } from "../../App";

export function EventDate() {
  return (
    <div className={styles.eventDate}>
      <p>DATE: {fakeEvent.eveDate}</p>
      <p>TIME: {fakeEvent.eveTime}</p>
    </div>
  );
}
