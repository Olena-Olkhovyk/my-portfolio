import classes from "./Services.module.css";
const Services = () => {
  const section = "container";
  return (
    <section className={`${section} ${classes.services}`} id="services">
      <h2 className={classes.sectionTitle}>What I Do</h2>
      <p className={classes.sectionSubtitle}>
        My <span>Services</span>
      </p>
    </section>
  );
};
export default Services;
