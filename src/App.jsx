import { Global, css } from "@emotion/react";
import { colors } from "./assets/designTokens";

const { fontColor, backgroundColor } = colors;

const globalStyles = css`
  html,
  body {
    font-family: "Raleway", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    line-height: 1.5;
    color: ${fontColor};
    background-color: ${backgroundColor};
    margin: 0;
  }
`;

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <p>Hello World!</p>
    </>
  );
}

export default App;
