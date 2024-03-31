import classes from "./contact.module.css";

import { FaRegAddressBook, FaRegEnvelope, FaRegMap } from "react-icons/fa";
const Contact = () => {
  const container = "container";
  return (
    <div className={classes.contactPage}>
      <div className={`${container} ${classes.contactSection}`} id="contact ">
        <h2 className="sectionTitle">Contact Me</h2>
        <p className="sectionSubtitle">
          Let's <span>Talk About Ideas</span>
        </p>

        <div className={classes.contactContainer}>
          <div className={classes.contactContent}>
            <div className={classes.contactCard}>
              <span className={classes.contactIcon}>
                <FaRegMap />
              </span>
              <h3 className={classes.cardTitle}>Address</h3>
              <p className={classes.cardData}>Berlin,Germany</p>
            </div>
            <div className={classes.contactCard}>
              <span className={classes.contactIcon}>
                <FaRegEnvelope />
              </span>
              <h3 className={classes.cardTitle}>Email</h3>
              <p className={classes.cardData}>olenaolkhovyk923@gmail.com</p>
            </div>
            <div className={classes.contactCard}>
              <span className={classes.contactIcon}>
                <FaRegAddressBook />
              </span>
              <h3 className={classes.cardTitle}>Phone</h3>
              <p className={classes.cardData}>+4915121380883</p>
            </div>
          </div>

          <form className={classes.contactForm}>
            <div className={classes.formGroup}>
              <div className={classes.formDiv}>
                <label className={classes.formTag}>
                  Your Name <b>*</b>
                </label>
                <input type="text" className={classes.formInput} />
              </div>
              <div className={classes.formDiv}>
                <label className={classes.formTag}>
                  Your Email <b>*</b>
                </label>
                <input type="email" className={classes.formInput} />
              </div>
              <div className={classes.formDiv}>
                <label className={classes.formTag}>
                  Your Subject <b>*</b>
                </label>
                <input type="text" className={classes.formInput} />
              </div>
              <div className={`${classes.formDiv} ${classes.formArea}`}>
                <label className={classes.formTag}>
                  Your Message <b>*</b>
                </label>
                <textarea className={classes.formInput}></textarea>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
