import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { breakpoints, colors } from "../assets/designTokens";
import Mailto from "./reachOutLinks/Mailto";
import Tel from "./reachOutLinks/Tel";
import WhatsApp from "./reachOutLinks/WhatsApp";
import chaiseLongue from "../assets/chaiselongue.webp";
import { getPosts } from "../api/apiFunctions";

const { md } = breakpoints;
const { color1, color2, color3, color5 } = colors;

const Container = styled.section`
  background-image: ${(props) => `url(${props.bgImage})`};
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

/**
 * Using immediately invoked function expression pattern, top-level await is not
 * available in the configured target environment when building for production.
 */
let content;
(async () => {
  content = await getPosts(3);
})();
const fallbackContent = new Map([
  ["Main heading", "Ratkaisukeskeinen lyhytterapeutti Mäntsälässä"],
  [
    "Introduction",
    "Ratkaisut ja voimavarat elämän erilaisiin tilanteisiin. Taustani lyhytterapeutiksi on mielenterveys- ja perhetyössä sekä lasten ja nuorten parissa. Erityinen mielenkiinnon kohteeni on trauma- ja kiintymyssuhdetyöskentely. Varaa ilmainen 15 minuutin tutustuminen!",
  ],
]);

export default function Hero() {
  const [bgImage, setBgImage] = useState("");
  const containerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setBgImage(chaiseLongue);
          observer.disconnect();
        }
      });
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Container ref={containerRef} bgImage={bgImage}>
      <h1>
        {content.has("Main heading")
          ? content.get("Main heading")
          : fallbackContent.get("Main heading")}
      </h1>
      <div>
        <p>
          {content.has("Introduction")
            ? content.get("Introduction")
            : fallbackContent.get("Main heading")}
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
