import { FixedDiv, Textarea, FixedButton } from "./styles";
import { BsTypeBold, BsTypeUnderline, BsTypeItalic } from "react-icons/bs";
import { useState } from "react";

let colorsArr = ["yellow", "blue", "red", "black", "purple"];
function App() {
  const [fontWeight, setFontWeight] = useState("normal");
  const [fontStyle, setFontStyle] = useState("normal");
  const [textDecoration, setTextDecoration] = useState("none");
  const [color, setColor] = useState("black");
  let buttonedArr = colorsArr.map((color) => (
    <FixedButton onClick={() => setColor(color)} color={color} />
  ));

  const switchBold = () => {
    if (fontWeight === "normal") {
      setFontWeight("bold");
    } else setFontWeight("normal");
  };
  const switchStyle = () => {
    if (fontStyle === "normal") {
      setFontStyle("italic");
    } else setFontStyle("normal");
  };

  const switchDecoration = () => {
    if (textDecoration === "none") {
      setTextDecoration("underline");
    } else setTextDecoration("none");
  };

  return (
    <FixedDiv>
      <label>Enter value : </label>
      <Textarea
        type="text"
        name="textValue"
        fontWeight={fontWeight}
        fontStyle={fontStyle}
        textDecoration={textDecoration}
        color={color}
      />
      <FixedDiv>
        <BsTypeBold onClick={switchBold} size="35px" cursor="pointer" />
        <BsTypeUnderline
          onClick={switchDecoration}
          size="35px"
          cursor="pointer"
        />
        <BsTypeItalic onClick={switchStyle} size="35px" cursor="pointer" />
      </FixedDiv>
      {buttonedArr}
    </FixedDiv>
  );
}

export default App;
