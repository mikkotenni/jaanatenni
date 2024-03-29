import styled from "@emotion/styled";

const Container = styled.section`
  margin-top: 2rem;

  & > h2:first-of-type {
    margin-top: 0;
  }
`;

export default function SelfIntroduction() {
  return (
    <Container id="jaana">
      <h2>Jaana</h2>
      <p>
        Hei! Olen lyhytterapeutiksi opiskeleva sairaanhoitaja sekä
        terveydenhuolto- ja sosiaalialan ammattilainen. Olen työskennellyt
        lasten, nuorten, perheiden sekä mielenterveystyön parissa. Erityisenä
        mielenkiinnon kohteena ja lisäkoulutuksen aiheena on ollut trauma- ja
        kiintymyssuhdetyöskentely.
      </p>
    </Container>
  );
}
