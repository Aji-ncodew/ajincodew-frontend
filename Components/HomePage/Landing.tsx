import classes from "./Landing.module.css";
import LandingContent from "./LandingContent";
import Navbar from "../Header/Header";

function Landing() {
  const crossClass1 = `${classes.box} ${classes.cross1}`;
  const crossClass2 = `${classes.box} ${classes.cross2}`;
  const nClass = `${classes.content} ${classes.active}`;
  return (
    <div className={classes.container}>
      {/* <Navbar /> */}
      <div className={classes.content}>
        <LandingContent />
      </div>
      <div className={nClass}>
        {/* <div className={classes.box}></div> */}
        <div className={crossClass1}></div>
        <div className={crossClass2}></div>
        {/* <div className={classes.box}></div> */}
      </div>
    </div>
  );
}

export default Landing;
