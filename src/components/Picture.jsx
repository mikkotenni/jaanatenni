import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { breakpoints } from "../assets/designTokens";

const { md } = breakpoints;

const Container = styled.figure`
  margin: 0;
  margin-top: 2rem;

  img {
    width: 100%;
    aspect-ratio: 1 / 1.5;
    height: auto;
  }
`;

export default function Picture(props) {
  const { mobileSrc, src, alt } = props;
  const [show, setShow] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });
    });

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <Container>
      <picture>
        <source media={`(min-width: ${md})`} srcSet={show ? src : ""} />
        <img
          ref={imgRef}
          src={show ? mobileSrc : ""}
          alt={alt}
          loading="lazy"
        />
      </picture>
    </Container>
  );
}

Picture.propTypes = {
  mobileSrc: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
