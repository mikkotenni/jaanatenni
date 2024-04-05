import styled from "@emotion/styled";
import { breakpoints, colors } from "../assets/designTokens";
import Mailto from "./reachOutLinks/Mailto";
import Tel from "./reachOutLinks/Tel";
import WhatsApp from "./reachOutLinks/WhatsApp";
import chaiseLongue from "../assets/chaiselongue.webp";

const { md } = breakpoints;
const { color1, color2, color3, color5 } = colors;

const Container = styled.section`
  background-image: url(${chaiseLongue});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  padding: 1rem;
  transition: padding 0.5s ease-out;
  background-color: ${color3};

  @media (min-width: ${md}) {
    padding: 6rem 3rem;
  }

  h1 {
    margin-top: 0;
    margin-bottom: 0.75rem;
    background-color: ${color2};
    padding: 1rem 1.5rem;
    font-size: 1.25rem;
    display: inline-block;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    margin-right: 3rem;

    @media (min-width: ${md}) {
      font-size: 2.25rem;
    }
  }

  address {
    font-style: normal;

    & a {
      display: block;
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;

      @media (min-width: ${md}) {
        display: inline-block;
      }
    }

    & a:not(:last-of-type) {
      @media (min-width: ${md}) {
        padding-right: 2rem;
      }
    }
  }

  p {
    background-color: ${color5};
    padding: 1rem 1.5rem;
    display: inline-block;
    max-width: 900px;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    font-weight: 600;
    margin-left: 3rem;
    margin-top: 0;
    margin-bottom: 0.75rem;
    color: ${color1};

    @media (min-width: ${md}) {
      font-size: 1.25rem;
    }
  }
`;

export default function Hero() {
  return (
    <Container>
      <h1>Mielenterveyttä ja hyvinvointia lyhytterapialla</h1>
      <div>
        <p>
          Ratkaisuja ja voimavaroja elämän eri haasteisiin. Mielenterveyttä ja
          psyykkistä hyvinvointia kannattaa vaalia jo ennen kuin mitään
          suurempia haasteita on ilmaantunutkaan. Varaa ilmainen 15 minuutin
          tutustuminen!
        </p>
      </div>
      <address>
        <p>
          <WhatsApp />
          <Tel />
          <Mailto />
        </p>
      </address>
    </Container>
  );
}
