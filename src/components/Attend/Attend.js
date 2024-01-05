import styles from "./Attend.module.css";
import { useState } from "react";

//!!!!!!!!!!!!!!
export function Attend({ onNewAttendent }) {
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
    <div className={styles.root}>
      <div>
        <label htmlFor="name">Enter Your Name: </label>
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
        <p>Will you attend the event?</p>
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
