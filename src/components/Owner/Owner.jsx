import React from "react";
import OwnerImg from "../../assets/Owner2.jpg";
import "./Owner.css";
function Owner() {
  return (
    <div className="ownerContainer">
      <h1 className="ownerTitle">We Are Drvien By Our Vision</h1>
      <h1 className="ownerTitle2">And Inspired By Our Leader</h1>
      <img src={OwnerImg} alt="owner" className="OwnerImg" />
    </div>
  );
}

export default Owner;
