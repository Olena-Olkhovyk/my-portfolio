import classes from "./header.module.css";
import { links } from "../../assets/data/data";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { animateScroll } from "react-scroll";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  const scrollTop = () => {
    animateScroll.scrollToTop();
  };

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", showMenu);
  }, [showMenu]);
  return (
    <header
      className={`${classes.header} ${scrollNav ? classes.scrollHeader : ""} `}
    >
      <nav className={classes.nav}>
        <Link to="/" onClick={scrollTop} className={classes.navLogo}>
          Olkhovyk
        </Link>

        <div className={showMenu ? classes.showMenu : classes.navMenu}>
          <div className={classes.navData}>
            <ul className={classes.navList}>
              {links.map(({ name, path }, index) => (
                <li className={classes.navItem} key={index}>
                  <Link
                    className={classes.navLink}
                    to={path}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setShowMenu(!showMenu)}
                    activeClassName={classes.active}
                  >
                    {name}
                  </Link>
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
