import React from "react";

const Navigation = ({ onRouteChange, currentRoute }) => {
  let result;

  if (currentRoute === "home") {
    return (result = (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("signout")}
          className="f3 link dim black underline pa3 pointer"
        >
          Sign Out
        </p>
      </nav>
    ));
  } else if (currentRoute === "register") {
    result = (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("signin")}
          className="f3 link dim black underline pa3 pointer"
        >
          Back to sign in
        </p>
      </nav>
    );
  } else {
    result = <div className="pt6" />;
  }
  return result;
};

export default Navigation;
