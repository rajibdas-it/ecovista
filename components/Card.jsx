import React from "react";

const Card = ({ children }) => {
  return (
    <div className="col-span-12 lg:col-span-4 2xl:col-span-6">{children}</div>
  );
};

export default Card;
