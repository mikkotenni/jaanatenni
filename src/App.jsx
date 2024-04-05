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
import JaanaMobile from "./assets/jaanamobile.webp";
import JaanaJaTinka from "./assets/jaanajatinka.webp";
import JaanaJaTinkaMobile from "./assets/jaanajatinkamobile.webp";
import ContactInformation from "./components/ContactInformation";
import Picture from "./components/Picture";

const { fontColor, backgroundColor, color1 } = colors;
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
  a {
    color: ${color1};
  }
`;
const Container = styled.div`
  max-width: 1800px;
  margin: 0 auto;
`;
const GridContainer = styled.div`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: ${md}) {
    margin: 2rem 4rem 4rem;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
  @media (min-width: ${xl}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
const JaanaJaTinkaSmXl = styled.div`
  @media (min-width: ${md}) and (max-width: ${xl}) {
    display: none;
  }
`;
const JaanaJaTinkaMdLg = styled.div`
  display: none;

  @media (min-width: ${md}) and (max-width: ${xl}) {
    display: block;
  }
`;

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <Header />
      <Hero />
      <Container>
        <GridContainer>
          <div>
            <SelfIntroduction />
            <Picture mobileSrc={JaanaMobile} src={Jaana} alt="Jaana" />
          </div>
          <div>
            <TherapyConcept />
            <Prices />
          </div>
          <div>
            <JaanaJaTinkaSmXl>
              <Picture
                mobileSrc={JaanaJaTinkaMobile}
                src={JaanaJaTinka}
                alt="Jaana ja terapiakoira Tinka"
              />
            </JaanaJaTinkaSmXl>
            <ContactInformation />
          </div>
          <JaanaJaTinkaMdLg>
            <Picture
              mobileSrc={JaanaJaTinkaMobile}
              src={JaanaJaTinka}
              alt="Jaana ja terapiakoira Tinka"
            />
          </JaanaJaTinkaMdLg>
        </GridContainer>
      </Container>
      <Footer />
    </>
  );
}

export default App;
