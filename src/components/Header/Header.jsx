import classes from "./header.module.css";
import { links } from "../../assets/data/data";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import { useEffect, useState } from "react";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", showMenu);
  }, [showMenu]);
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <a href="" className={classes.navLogo}>
          Olkhovyk
        </a>

        <div className={showMenu ? classes.showMenu : classes.navMenu}>
          <div className={classes.navData}>
            <ul className={classes.navList}>
              {links.map(({ name, path }, index) => (
                <li className={classes.navItem} key={index}>
                  <a href="" className={classes.navLink}>
                    {name}
                  </a>
                </li>
              ))}
            </ul>

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
          </div>
        </div>
        <div className={classes.navBtns}>
          <div className={classes.themeToggle}>
            <BsSun />
          </div>

          <div
            className={`${
              showMenu
                ? `${classes.navToggle} ${classes.animatedToggle}`
                : classes.navToggle
            }`}
            onClick={() => setShowMenu(!showMenu)}
          >
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
