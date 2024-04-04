import React from "react";
import "./input.scss";

const Input = ({ label, id, type, value, required }) => {
  return (
    <div className="of-form-input">
      <label htmlFor={id}>
        {label}
        {required && <span class="required">&#42;</span>}
      </label>
      <input name={id} type={type} value={value} id={id} />
    </div>
  );
};

export default Input;
