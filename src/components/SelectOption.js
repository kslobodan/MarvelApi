import React from "react";
// import Select from "react-select/dist/declarations/src/Select";
import Select from "react-select";
import classes from "./SelectOption.module.css";

const SelectOption = () => {
  const options = [
    { value: "none", label: "Select sort..." },
    { value: "nameAsc", label: "Name Asc" },
    { value: "nameDesc", label: "Name Desc" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div className={classes.field}>
      <span>
        <label>Select sort parameter</label>
      </span>
      <Select options={options} />
    </div>
  );
};

export default SelectOption;
