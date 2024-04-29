import { useState } from "react";
import classes from "./contact.module.css";

import { FaRegAddressBook, FaRegEnvelope, FaRegMap } from "react-icons/fa";
import axios from "axios";
const Contact = () => {
  const [notification, setNotification] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://sheet.best/api/sheets/b5262895-c463-456b-8ddc-67cac6a675dd",
        form
      )
      .then((response) => {
        console.log(response);
        setForm({ name: "", email: "", subject: "", message: "" });
        const capitalizedFirstName =
          form.name.charAt(0).toUpperCase() + form.name.slice(1);
        setNotification(
          `${capitalizedFirstName}, thank you for contacting me! Your message was sent successfully!`
        );
        setTimeout(() => {
          setNotification(null);
        }, 3000);
      });
  };
  const container = "container";
  return (
    <div className={classes.contactPage} id="contact">
      {notification && (
        <div className={classes.alertBox}>
          <h2>{notification}</h2>
        </div>
      )}
      <div className={`${container} ${classes.contactSection}`}>
        <h2 className="sectionTitle">Contact Me</h2>
        <p className="sectionSubtitle">
          Let's <span>Talk About Ideas</span>
        </p>

        <div className={classes.contactContainer}>
          <div>
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
          <form className={classes.contactForm} onSubmit={handleSubmit}>
            <div className={classes.formGroup}>
              <div className={classes.formDiv}>
                <label className={classes.formTag}>
                  Your Name <b>*</b>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={classes.formInput}
                  required
                />
              </div>
              <div className={classes.formDiv}>
                <label className={classes.formTag}>
                  Your Email <b>*</b>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={classes.formInput}
                  required
                />
              </div>
            </div>
            <div className={classes.formDiv}>
              <label className={classes.formTag}>
                Your Subject <b>*</b>
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className={classes.formInput}
                required
              />
            </div>
            <div className={`${classes.formDiv} ${classes.formArea}`}>
              <label className={classes.formTag}>
                Your Message <b>*</b>
              </label>
              <textarea
                className={classes.formInput}
                name="message"
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className={classes.submit}>
              <p>* Accept the terms and conditions.</p>
              <button type="submit" className="btn">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
