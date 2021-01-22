import React from "react";
import classnames from "classnames";

import "./CategoryCapsule.styles.scss";

const CategoryCapsule = ({ selected, id, value, SelectCategory }) => {
  return (
    <>
      <h3
        className={classnames("category__capsule rounded pointer", {
          category__capsule__selected: selected.includes(id),
        })}
        id={id}
        onClick={() => SelectCategory(id)}
      >
        {value}
      </h3>
    </>
  );
};

export default CategoryCapsule;
