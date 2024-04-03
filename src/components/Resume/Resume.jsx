import classes from "./resume.module.css";
import { cv } from "../../assets/data/data";
import Card from "./Card";
const Resume = () => {
  const container = "container";
  return (
    <div className={classes.resumePage} id="resume">
      <section className={`${container} ${classes.resumeSection}`}>
        <h2 className="sectionTitle">Resume</h2>
        <p className="sectionSubtitle">
          My <span>Story</span>
        </p>
        <div className={classes.resumeContainer}>
          <div className={classes.resumeGroup}>
            <h3 className={classes.heading}>Education</h3>
            <div className={classes.resumeItems}>
              {cv.map(
                ({ id, category, description, subtitle, title, date }) => {
                  if (category === "education") {
                    return (
                      <Card
                        key={id}
                        title={title}
                        description={description}
                        date={date}
                        subtitle={subtitle}
                      />
                    );
                  } else {
                    return null;
                  }
                }
              )}
            </div>
          </div>
          <div className={classes.resumeGroup}>
            <h3 className={classes.heading}>Experiance</h3>
            <div className={classes.resumeItems}>
              {cv.map(
                ({ id, category, description, subtitle, title, date }) => {
                  if (category === "experiance") {
                    return (
                      <Card
                        key={id}
                        title={title}
                        description={description}
                        date={date}
                        subtitle={subtitle}
                      />
                    );
                  } else {
                    return null;
                  }
                }
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Resume;
