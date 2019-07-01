import React from "react";

const Welcoming = ({ userName }) => {
  return (
    <div>
      <div className="white f1">{`Welcome to FACE-IT ${userName}!`}</div>
    </div>
  );
};

export default Welcoming;
