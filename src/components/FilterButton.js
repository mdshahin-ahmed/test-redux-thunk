import React from "react";

const FilterButton = () => {
  return (
    <div>
      <button className={`btn filterButton my-5 mx-2`}>STOCK</button>
      <button className={`btn filterButton my-5 mx-2`}>AMD</button>
      <button className={`btn filterButton my-5 mx-2`}>INTEL</button>
    </div>
  );
};

export default FilterButton;
