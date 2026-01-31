import styled from "styled-components";

const SobreContainer = styled.div`
  background-color: #ffcc2b;
  padding: 128px 32px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  text-align: left;
  & img {
    width: 80vw;
  }
  & p {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    background-color: #ffcc2b;
    padding: 128px 32px;
    & img {
      width: auto;
    }
    & p {
      width: 60%;
    }
  }
`;
const TextSobre = styled.p`
  color: black;
  width: 60%;
`;

const Logo = styled.img`
  width: 1000px;
`;

const Escola = () => {
  return (
    <SobreContainer>
      <Logo src="/logos/logo_preta.png" alt="" />
      <TextSobre>
        A Dumont Tênis é uma escola que possui tradição em treinamento
        competitivo. Com mais de 30 anos em Brasília e sede no Iate Clube de
        Brasília, desenvolveu um sistema de aprendizado que combina qualidade de
        ensino, prática e teoria, sendo essa sua marca registrada. Agora, com
        unidades também no Clube do Exército no Setor Militar Urbano e na QI 23 do Lago Sul, a Dumont Tênis oferece a todos
        os interessados a oportunidade de conhecer, aprender, jogar e se
        divertir com esse esporte tão saudável.
      </TextSobre>
    </SobreContainer>
  );
};

export default Escola;
