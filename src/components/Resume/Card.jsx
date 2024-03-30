import classes from "./resume.module.css";
import { useState } from "react";
const Card = ({ title, description, date, subtitle }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className={classes.resumeItem}>
      <div
        className={classes.resumeHeader}
        onClick={() => setShowInfo(!showInfo)}
      >
        <h3 className={classes.resumeSubtitle}>{title}</h3>
        <span className={classes.resumeIcon}>{showInfo ? "-" : "+"}</span>
      </div>
      <div
        className={`${showInfo ? classes.showContent : ""} ${
          classes.resumeContent
        }`}
      >
        <div className={classes.dateTitle}>
          <h3 className={classes.title}>{subtitle}</h3>
          <span className={classes.date}>{date}</span>
        </div>

        <p className={classes.description}>{description}</p>
      </div>
    </div>
  );
};
export default Card;
