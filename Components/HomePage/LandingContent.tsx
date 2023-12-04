// LandingContent.js

import classes from "./LandingContent.module.css";
import Link from "next/link";

function LandingContent() {
  return (
    <div className={classes.container}>
      <div className={classes.clubHeading}>
        <h3>Aji ncodew</h3>
      </div>
      <div className={classes.title}>
        <h1>
          <span className={`flag-icon flag-icon-ma ${classes.flagIcon}`}></span> IT community
        </h1>
      </div>
      <div className={classes.college}>
        <h3>Moroccan it organisation</h3>
      </div>
      <div className={classes.clubInfo}>
        <h2>Good programmers know what to write. Great ones know what to write and reuse</h2>
        <p>
          Bloging + Coding Contest + Seminars + Trainings
        </p>
      </div>

      {/* <Link href="/events"> */}
        <label style={{ cursor: "pointer" }}>
          <button>Participate</button>
        </label>
      {/* </Link> */}
    </div>
  );
}

export default LandingContent;
