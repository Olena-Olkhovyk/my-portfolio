import classes from "./Home.module.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

import profileImg from "../../assets/home/olena.png";
import shape1 from "../../assets/home/shape-1.png";
import shape2 from "../../assets/home/shape-2.png";
const Home = () => {
  const container = "container";
  return (
    <section className={classes.home} id="home">
      <div className={`${container} ${classes.homeContainer}`}>
        <p className={classes.subTitle}>
          Hello, <span>My Name Is</span>
        </p>
        <h1 className={classes.title}>
          <span>Olena</span> Olkhovyk
        </h1>
        <p className={classes.job}>
          <span>I Am</span> <b>React Frontend Developer</b>
        </p>
        <p className={classes.text}>
          From Ukraine, Kharkiv. Based in Germany, Berlin. I have reach
          experiance in Frontend, also I am good at design.
        </p>
        <div className={classes.socials}>
          <a href="" className={classes.socialLink}>
            <FaLinkedin />
          </a>
          <a href="" className={classes.socialLink}>
            <FaGithub />
          </a>
          <a href="" className={classes.socialLink}>
            <FaInstagram />
          </a>
        </div>
        <div className={classes.btnsContainer}>
          <a href="" className="btn">
            Download CV
          </a>{" "}
          <a href="" className="link">
            My Skills
          </a>
        </div>
      </div>
    </section>
  );
};
export default Home;
