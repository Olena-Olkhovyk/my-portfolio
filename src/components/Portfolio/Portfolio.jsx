import Items from "./Items";
import List from "./List";
import classes from "./Portfilio.module.css";
import { projects } from "../../assets/data/data";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const allNavList = [
  "all",
  ...new Set(projects.map((project) => project.category)),
];
console.log(allNavList);

const Portfolio = () => {
  const [projectItems, setProjectItems] = useState(projects);
  const [navList, setNavList] = useState(allNavList);

  const filterItems = (category) => {
    if (category === "all") {
      setProjectItems(projects);
      return;
    }
    const newProjectItems = projects.filter(
      (item) => item.category === category
    );
    setProjectItems(newProjectItems);
  };
  return (
    <section id="work" className={classes.portfolioSection}>
      <div className="container">
        <h2 className="sectionTitle">Portfolio</h2>
        <p className="sectionSubtitle">
          My <span>Cases</span>
        </p>

        <List list={navList} filterItems={filterItems} />

        <div className={classes.portfolioContainer}>
          <AnimatePresence initial={false}>
            <Items projectItems={projectItems} />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
