import { useState } from "react";
import classes from "./Portfilio.module.css";
const List = ({ list, filterItems }) => {
  const [active, setActive] = useState(0);

  return (
    <div className={classes.portfolioList}>
      {list.map((category, index) => (
        <button
          onClick={() => {
            setActive(index);
            filterItems(category);
          }}
          className={`${classes.portfolioListItem} ${
            active === index ? classes.activeItem : ""
          }`}
          key={index}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
export default List;
