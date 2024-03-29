import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Container = styled.figure`
  margin: 0;
  margin-top: 2rem;
`;

/**
 * Renders an image element with the given source path and alternative text.
 * @param {Object} props
 * @param {string} props.imageSrc - The source path of the image.
 * @param {string} props.altText - The alternative text of the image.
 * @returns {JSX.Element}
 */
export default function Picture(props) {
  const { imageSrc, altText } = props;
  return (
    <Container>
      <img src={imageSrc} alt={altText} />
    </Container>
  );
}

Picture.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};
