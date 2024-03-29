import { Global, css } from "@emotion/react";
import { colors, breakpoints } from "./assets/designTokens";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import SelfIntroduction from "./components/SelfIntroduction";
import Prices from "./components/Prices";
import TherapyConcept from "./components/TherapyConcept";
import styled from "@emotion/styled";
import Jaana from "./assets/jaana.webp";

const { fontColor, backgroundColor } = colors;
const { md, xl } = breakpoints;

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
const GridContainer = styled.div`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  img {
    width: 100%;
    height: auto;
  }

  @media (min-width: ${md}) {
    margin: 2rem 4rem 4rem;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem;
  }
  @media (min-width: ${xl}) {
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 1800px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
`;

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <Header />
      <Hero />
      <GridContainer>
        <div>
          <SelfIntroduction />
          <img src={Jaana} alt="Jaana" />
        </div>
        <div>
          <TherapyConcept />
          <Prices />
        </div>
      </GridContainer>
      <Footer />
    </>
  );
}

export default App;
