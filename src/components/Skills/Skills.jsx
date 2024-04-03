import classes from "./Skills.module.css";
import { skills } from "../../assets/data/data";
const Skills = () => {
  const container = "container";
  return (
    <div className={classes.skillsPage} id="skills">
      <section className={`${container} ${classes.skillsSection}`}>
        <h2 className="sectionTitle">Professional Skills</h2>
        <p className="sectionSubtitle">
          My <span>Talent</span>
        </p>
        <div className={classes.skillsContainer}>
          {skills.map(({ name, percentage, description }, index) => (
            <div className={classes.skillsItem} key={index}>
              <div className={classes.skillsTitle}>
                <h3 className={classes.skillsName}>{name}</h3>
                <span className={classes.skillsNumber}>
                  {percentage} <span>%</span>
                </span>
              </div>
              <p className={classes.skillsDescription}>{description}</p>
              <div className={classes.skillsBar}>
                <span
                  className={classes.skillsPercentage}
                  style={{ width: `${percentage}%` }}
                >
                  <span></span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Skills;
