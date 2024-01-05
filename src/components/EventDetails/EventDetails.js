import styles from "./EventDetails.module.css";
import { fakeEvent } from "../../App";

//new line
export function EventDetails() {
  return (
    <div className={styles.root}>
      <p>EVENT NAMME: {fakeEvent.eveName}</p>
      <p>LOCATION: {fakeEvent.eveLocation}</p>
    </div>
  );
}
