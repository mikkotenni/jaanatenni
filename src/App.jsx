import { useEffect, useState } from "react";
import { Global, css } from "@emotion/react";
import { colors, breakpoints } from "./assets/designTokens";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Psychotherapy from "./components/Psychotherapy";
import Prices from "./components/Prices";
import TherapyConcept from "./components/TherapyConcept";
import styled from "@emotion/styled";
import JaanaJaTinka from "./assets/jaanajatinka.webp";
import JaanaJaTinkaMobile from "./assets/jaanajatinkamobile.webp";
import ContactInformation from "./components/ContactInformation";
import Picture from "./components/Picture";
import { getPosts } from "./api/apiFunctions";

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
const JaanaWithTinkaSmXl = styled.div`
  @media (min-width: ${md}) and (max-width: ${xl}) {
    display: none;
  }
`;
const JaanaWithTinkaMdLg = styled.div`
  display: none;

  @media (min-width: ${md}) and (max-width: ${xl}) {
    display: block;
  }
`;
const ServiceIsUnavailable = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: ${fontColor};
  background-color: ${backgroundColor};
`;

function App() {
  // Relies on evaluation: empty string is falsy, non-empty string is truthy.
  const [isUnavailable, setIsUnavailable] = useState('...');

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts(6);
      setIsUnavailable(posts.get("isUnavailable"));
    };

    fetchPosts();
  }, []);

  return isUnavailable ? (
    <ServiceIsUnavailable>
      <h3>{isUnavailable}</h3>
    </ServiceIsUnavailable>
  ) : (
    <>
      <Global styles={globalStyles} />
      <Header />
      <Hero />
      <Container>
        <GridContainer>
          <div>
            <TherapyConcept />
          </div>
          <div>
            <Psychotherapy />
          </div>
          <div>
            <ContactInformation />
            <Prices />
            <JaanaWithTinkaSmXl>
              <Picture
                mobileSrc={JaanaJaTinkaMobile}
                src={JaanaJaTinka}
                alt="Jaana ja terapiakoira Tinka"
              />
            </JaanaWithTinkaSmXl>
          </div>
          <JaanaWithTinkaMdLg>
            <Picture
              mobileSrc={JaanaJaTinkaMobile}
              src={JaanaJaTinka}
              alt="Jaana ja terapiakoira Tinka"
            />
          </JaanaWithTinkaMdLg>
        </GridContainer>
      </Container>
      <Footer />
    </>
  );
}

export default App;
