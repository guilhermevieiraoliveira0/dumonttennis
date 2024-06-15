import { NavLink } from "react-router-dom";
import styled from "styled-components";
const CardContainer = styled.div`
  width: 250px;
  height: 350px;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  background-color: #ffcc2b;
  border-radius: 20px;

  & img {
    border-radius: 20px 20px 0 0;
  }
  @media screen and (min-width: 768px) {
    width: 300px;
    height: 350px;
    padding-bottom: 16px;
    display: flex;
    flex-direction: column;
    background-color: #ffcc2b;
    border-radius: 20px;

    & img {
      border-radius: 20px 20px 0 0;
    }
  }
`;

const ParagraphUnidade = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 0;
`;

const Unidade = styled.p`
  width: 100%;
  margin: 0;
  font-weight: bold;
  font-size: 16px;
  text-align: left;
`;

const BotaoDetalhes = styled(NavLink)`
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  text-decoration: none;
  font-weight: bold;
  border: 2px solid black;
  color: black;
  padding: 4px;
  &:hover {
    background-color: black;
    border: 2px solid black;
    color: #ffcc2b;
    transition: 0.5s;
  }
`;

const FooterCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-direction: column;
  padding: 24px;
`;

const InfosContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: start;
`;

const Imagem = styled.img`
  width: 100%;
  height: 100%;
`;

// eslint-disable-next-line react/prop-types
const CardHomeUnidades = ({ image, label, unidade }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <CardContainer>
      <Imagem src={image} loading="lazy" alt="" />
      <FooterCard>
        <InfosContainer>
          <ParagraphUnidade>UNIDADE</ParagraphUnidade>
          <Unidade>{label}</Unidade>
        </InfosContainer>
        <BotaoDetalhes to={`/unidade/${unidade}`} onClick={scrollToTop}>
          DETALHES
        </BotaoDetalhes>
      </FooterCard>
    </CardContainer>
  );
};

export default CardHomeUnidades;
