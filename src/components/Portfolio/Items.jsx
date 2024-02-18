import classes from "./Portfilio.module.css";
import shapeTwo from "../../assets/home/shape-2.png";
import { motion } from "framer-motion";
const Items = ({ projectItems }) => {
  const subtitle = "subtitle";
  return (
    <>
      {projectItems.map((projectItem) => {
        const { id, title, img, category, description } = projectItem;
        return (
          <motion.div
            layout
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0.8, scale: 0.6 }}
            exit={{ opacity: 0.8, scale: 0.6 }}
            transition={{ duration: 0.3 }}
            className={classes.portfolioItems}
            key={id}
          >
            <div className={classes.portfolioImgWrapper}>
              <img src={img} alt={title} className={classes.projectImg} />
            </div>

            <span className={`${subtitle} ${classes.portfolioSubtitle}`}>
              {category}
            </span>
            <h3 className="title">{title}</h3>
            <p className={classes.portfolioDescription}>{description}</p>

            <a href="" className={classes.link}>
              View project
            </a>
          </motion.div>
        );
      })}
    </>
  );
};
export default Items;
