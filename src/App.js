import AppCSS from "./components/App.module.css";
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
    <div className={AppCSS.background}>
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
  );
}

function EventDetails() {
  return (
    <div className={InfoDetailsCSS.eventDetails}>
      <h2>EVENT NAMME: {fakeEvent.eveName}</h2>
      <h2>LOCATION: {fakeEvent.eveLocation}</h2>
    </div>
  );
}

function Attendents({ newFakeAttendents }) {
  return (
    <div className={InfoDetailsCSS.attendents}>
      <h2>BOARDING LIST:</h2>
      <div>
        {newFakeAttendents.map((ppl) => (
          <List ppl={ppl.name} key={ppl.name} />
        ))}
      </div>
      <h2>NOT YET RESPONDED:</h2>
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
  return <h3 className={RespondDetailsCSS.inline}>‣{ppl}</h3>;
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
        <h2>Enter Your Name:</h2>
        <input
          type="text"
          placeholder="Your Name"
          value={magaState.name}
          onChange={handleGoing}
          name="name"
        ></input>
      </div>
      <div>
        <h2>Yes, I will attend the event</h2>
        <input
          type="radio"
          name="attending"
          value={"going"}
          onChange={handleGoing}
          checked={magaState.attending === "going"}
        ></input>
      </div>
      <div>
        <h2>No, I will not attend this event</h2>
        <input
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
