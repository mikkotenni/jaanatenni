import styled from "@emotion/styled";
import { colors } from "../../assets/designTokens";
import { contactInformation } from "../../../config";
import { PhoneNumberUtil, PhoneNumberFormat } from 'google-libphonenumber';

const { phone } = contactInformation;
const phoneUtil = PhoneNumberUtil.getInstance();
const phoneNumber = phoneUtil.parse(phone, 'FI');
const formattedNumber = phoneUtil.format(phoneNumber, PhoneNumberFormat.NATIONAL);

const href = `tel:${phone}`;

const Container = styled.a`
  color: ${colors.color1};
  text-decoration: none;

  .material-symbols-outlined {
    vertical-align: middle;
    margin-right: 0.25rem;
  }
`;

export default function Tel() {
  return (
    <Container href={href}>
      <span className="material-symbols-outlined"> call </span>
      {formattedNumber}
    </Container>
  );
}
