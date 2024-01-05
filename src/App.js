import styles from "./App.module.css";
import InfoSectionCSS from "./components/InfoSection.module.css";
import RespondSectionCSS from "./components/RespondSection.module.css";
import InfoDetailsCSS from "./components/InfoDetails.module.css";
import RespondDetailsCSS from "./components/RespondDetails.module.css";
import { useState } from "react";
import { EventDate } from "./components/EventDate/EventDate";
import { EventDetails } from "./components/EventDetails/EventDetails";
import { Attendents } from "./components/Attendents/Attendents";
import { Attend } from "./components/Attend/Attend";

export let fakeEvent = {
  eveName: "Badminton",
  eveDate: Date.now(),
  eveTime: "6PM - 8PM",
  evedetails: "play badinton",
  eveLocation: "EPIC",
  eveWeb: "non",
};

const fakeAttendents = [
  { name: "person1", attending: null, responsed: false },
  { name: "person2", attending: true, responsed: true },
  { name: "person3", attending: false, responsed: true },
];

function App() {
  const [newFakeAttendents, setNewFakeAttendents] = useState(fakeAttendents);

  function handleNewAttendent(newAttendent) {
    setNewFakeAttendents((fakeAttendents) => [...fakeAttendents, newAttendent]);
  }

  return (
    <div className={styles.background}>
      <div className={styles.root}>
        <div className={InfoSectionCSS.all}>
          <div className={InfoDetailsCSS.deco}>
            <p className={RespondDetailsCSS.boarding}>
              ✈ You've been invited to fly with <br></br> Friendship Airline
            </p>
          </div>
          <div className={InfoDetailsCSS.info}>
            <EventDate />
            <EventDetails />
            <Attendents newFakeAttendents={newFakeAttendents} />
          </div>
        </div>
        <div className={RespondSectionCSS.all}>
          <div className={RespondDetailsCSS.deco}>
            <p className={RespondDetailsCSS.airline}>
              Boarding Pass <br></br>Friendship Airline ✈
            </p>
          </div>
          <Attend onNewAttendent={handleNewAttendent} />
        </div>
      </div>
    </div>
  );
}

export default App;
