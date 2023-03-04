import React from "react";

const PrimaryButton = ({ children, onClick, ...props }) => {
  return (
    <button
      className="bg-primary font-semibold text-white px-6 py-2 rounded-md"
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
