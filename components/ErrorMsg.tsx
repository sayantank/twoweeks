import React from "react";

const ErrorMessage: React.FC = ({ children }) => {
  return <p className="text-red-500 text-sm">{children}</p>;
};

export default ErrorMessage;
