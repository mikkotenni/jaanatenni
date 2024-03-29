import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { breakpoints } from "../assets/designTokens";

const { md } = breakpoints;

const Container = styled.figure`
  margin: 0;
  margin-top: 2rem;
`;

/**
 * Renders an image element with the given source path and alternative text.
 * @param {Object} props
 * @param {string} props.mobileSrc - The source path of the image for small screens.
 * @param {string} props.src - The source path of the image.
 * @param {string} props.alt - The alternative text of the image.
 * @returns {JSX.Element}
 */
export default function Picture(props) {
  const { mobileSrc, src, alt } = props;
  return (
    <Container>
      <picture>
        <source media={`(min-width: ${md})`} srcSet={src} />
        <img src={mobileSrc} alt={alt} />
      </picture>
    </Container>
  );
}

Picture.propTypes = {
  mobileSrc: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
