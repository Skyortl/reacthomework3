import React, { useState } from "react";
import ChangeColorButton from "../ChangeColorButton/ChangeColorButton";
import ChangeColorInput from "../ChangeColorInput/ChangeColorInput";
const ChangeColorApp = () => {
  const random_rgb = () => {
    var o = Math.round,
      r = Math.random,
      s = 255;
    return "rgb(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + ")";
  };
  const [textColor, setTextColor] = useState("rgb(0,0,0)");
  const [bgColor, setBgColor] = useState("rgb(255,255,255)");
  const setBgColorFromRgb = (value) => {
    setBgColor(value);
    [red, green, blue] = value.substring(value.indexOf("(") + 1, value.length - 1).split(",");
    setRedColor(red);
    setGreenColor(green);
    setBlueColor(blue);
  };
  let [red, green, blue] = bgColor.substring(bgColor.indexOf("(") + 1, bgColor.length - 1).split(",");
  const [redColor, setRedColor] = useState(red);
  const [greenColor, setGreenColor] = useState(green);
  const [blueColor, setBlueColor] = useState(blue);
  return (
    <div>
      <h1 style={{ backgroundColor: bgColor, color: textColor }}>
        Some color text
      </h1>
      <div className="d-flex justify-content-center">
        <ChangeColorButton
          text="Red text"
          color="red"
          changeColorFunction={setTextColor}
        ></ChangeColorButton>
        <ChangeColorButton
          text="Green bg"
          color="green"
          changeColorFunction={setBgColorFromRgb}
        ></ChangeColorButton>
        <ChangeColorButton
          text="Random text"
          color={random_rgb()}
          changeColorFunction={setTextColor}
        ></ChangeColorButton>
        <ChangeColorButton
          text="Random bg"
          color={random_rgb()}
          changeColorFunction={setBgColorFromRgb}
        ></ChangeColorButton>
      </div>
      <h3>RGB:</h3>
      <div className="d-flex justify-content-center">
        <ChangeColorInput
          color={redColor}
          changeColor={(red) =>
            setBgColorFromRgb(`rgb(${red}, ${greenColor}, ${blueColor})`)
          }
        />
        <ChangeColorInput
          color={greenColor}
          changeColor={(green) =>
            setBgColorFromRgb(`rgb(${redColor}, ${green}, ${blueColor})`)
          }
        />
        <ChangeColorInput
          color={blueColor}
          changeColor={(blue) =>
            setBgColorFromRgb(`rgb(${redColor}, ${greenColor}, ${blue})`)
          }
        />
      </div>
    </div>
  );
};

export default ChangeColorApp;
