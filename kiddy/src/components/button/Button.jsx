import React from "react";
import PropTypes from "prop-types";

const Button = ({ color, padding, children }) => {
  const buttonStyle = {
    padding: padding,
    borderRadius: "15px 0px 15px 0px",
    border: "none",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    backgroundColor: color.backgroundColor,
    color: color.textColor,
  };

  return <button style={buttonStyle}>{children}</button>;
};

Button.propTypes = {
  color: PropTypes.shape({
    backgroundColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
  }),
  padding: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  color: {
    backgroundColor: "#007bff",
    textColor: "#fff",
  },
  padding: "10px 20px",
};

export default Button;
