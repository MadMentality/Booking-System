//change
import styles from "./App.module.css";
import InfoSectionCSS from "./components/InfoSection.module.css";
import RespondSectionCSS from "./components/RespondSection.module.css";
import InfoDetailsCSS from "./components/InfoDetails.module.css";
import RespondDetailsCSS from "./components/RespondDetails.module.css";
import { useState } from "react";
import { EventDate } from "./components/EventDate/EventDate";

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

function EventDetails() {
  return (
    <div className={InfoDetailsCSS.eventDetails}>
      <p>EVENT NAMME: {fakeEvent.eveName}</p>
      <p>LOCATION: {fakeEvent.eveLocation}</p>
    </div>
  );
}

function Attendents({ newFakeAttendents }) {
  return (
    <div className={InfoDetailsCSS.attendents}>
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

function List({ ppl }) {
  return <p className={RespondDetailsCSS.inline}>‣{ppl}</p>;
}
//!!!!!!!!!!!!!!
function Attend({ onNewAttendent }) {
  const [magaState, setMageState] = useState({
    name: "",
    attending: "going",
    responsed: true,
  });
  // better to use the same type. (like string to sting, booleun to blooeun)
  // !!!!!!!!!!!!!!!!!!!!!
  function handleGoing(e) {
    console.log(e.target.name);
    setMageState((or) => ({
      ...or,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!magaState.name) return;
    onNewAttendent(magaState);
  }

  return (
    <div className={RespondDetailsCSS.respond}>
      <div>
        <label htmlFor="name">Enter Your Name:</label>
        <input
          id="name"
          type="text"
          placeholder="Your Name"
          value={magaState.name}
          onChange={handleGoing}
          name="name"
        ></input>
      </div>
      <div>
        <p>Will you attend this event?</p>
        <label htmlFor="attending-go">Yes</label>
        <input
          id="attending-go"
          type="radio"
          name="attending"
          value={"going"}
          onChange={handleGoing}
          checked={magaState.attending === "going"}
        ></input>
      </div>
      <div>
        <label htmlFor="attending-no">No</label>
        <input
          id="attending-no"
          type="radio"
          name="attending"
          value={"not_going"}
          checked={magaState.attending === "not_going"}
          onChange={handleGoing}
        ></input>
      </div>
      <div>
        <br></br>
        <button onClick={handleSubmit}>Submit</button>
        {/* onSubmit only work for forms, divs use onclick */}
      </div>
    </div>
  );
}

export default App;
