import React from "react";
import styles from './Button.module.css'

const Button = ({ children, type, className}) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
