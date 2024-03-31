import classes from "./footer.module.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
const Footer = () => {
  const container = "container";
  return (
    <footer className={classes.footer}>
      <div className={`${container} ${classes.footerSection}`}>
        <div className={classes.socials}>
          <a href="" target="_blank" className={classes.socialLink}>
            <FaLinkedin />
          </a>
          <a href="" target="_blank" className={classes.socialLink}>
            <FaGithub />
          </a>
          <a href="" target="_blank" className={classes.socialLink}>
            <FaInstagram />
          </a>
        </div>

        <p className={classes.copyright}>All rights reserved</p>
        <p className={classes.copyright}>
          Developed by <span>Olena Olkhovyk</span>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
