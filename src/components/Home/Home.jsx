import classes from "./Home.module.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

import profileImg from "../../assets/home/olena1.png";
import shape1 from "../../assets/home/shape-1.png";
import shape2 from "../../assets/home/shape-2.png";
const Home = () => {
  const container = "container";
  return (
    <section className={classes.home} id="home">
      <div className={`${container} ${classes.homeContainer}`}>
        <p className={classes.subTitle}>
          HELLO, <span>MY NAME IS</span>
        </p>

        <h1 className={classes.title}>
          <span>Olena</span> Olkhovyk
        </h1>

        <p className={classes.job}>
          <span>I AM</span> <b>React Frontend Developer</b>
        </p>

        <div className={classes.imgWrapper}>
          <div className={classes.banner}>
            <img
              src={profileImg}
              alt="olena's image"
              className={classes.profile}
            />
          </div>

          <p className={`${classes.data} ${classes.dataOne}`}>
            <span className={classes.lgText}>
              2 <b>+</b>
            </span>
            <span className={classes.textSm}>
              Years of <span>Experiance</span>
            </span>
          </p>

          <p className={`${classes.data} ${classes.dataTwo}`}>
            <span className={classes.lgText}>7</span>
            <span className={classes.textSm}>
              {" "}
              Completed <span>Projects</span>
            </span>
          </p>

          <img src={shape1} alt="dots" className={classes.shape1} />
          <img src={shape2} alt="dots" className={classes.shape2} />
          <img src={shape2} alt="dots" className={classes.shape3} />
        </div>

        <p className={classes.text}>
          From Ukraine, Kharkiv. Based in Germany, Berlin. I have reach
          experiance in Frontend, also I am good at design.
        </p>

        <div className={classes.socials}>
          <a
            href="https://www.linkedin.com/in/olena-olkhovyk-aa191a260/"
            target="_blank"
            className={classes.socialLink}
            aria-label="Go to linkedin"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Olena-Olkhovyk?tab=repositories"
            className={classes.socialLink}
            aria-label="Go to GitHub"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            href=""
            className={classes.socialLink}
            aria-label="Go to Instagram"
            target="_blank"
          >
            <FaInstagram />
          </a>
        </div>

        <div className={classes.btnsContainer}>
          <a href="/resume.pdf" download="resume.pdf" className="btn">
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
