import React from "react";
import skull_1 from "../images/1.png";
import skull_2 from "../images/2.png";
import skull_3 from "../images/3.png";
import skull_4 from "../images/4.png";
import skull_5 from "../images/5.png";
const DrawImage = () => (
  <>
    {this.state.count === 5 && <img src={skull_1} alt="wrong answer 1" />}
    <img src={skull_2} alt="wrong answer 2" />
    <img src={skull_3}  alt="wrong answer 3"/>
    <img src={skull_4} alt="wrong answer 4"/>
    <img src={skull_5} alt="wrong answer 5"/>
  </>
);
export default DrawImage;
