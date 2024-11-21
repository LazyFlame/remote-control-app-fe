import React from "react";
import { useNavigate } from "react-router-dom";
import reloadimg from "../Asset/Images/reload.png";

const ButtonBox = (props) => {
  const navigate = useNavigate();

  const navigateProgressPage = () => {
    navigate("/progress");
  };

  return (
    <div className="btn-style">
      <div>
        <img src={reloadimg} onClick={navigateProgressPage} />
        <p>{props.name}</p>
      </div>
    </div>
  );
};

export default ButtonBox;
