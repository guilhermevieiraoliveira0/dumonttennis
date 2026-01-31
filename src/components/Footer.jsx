import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: #ffcc2b;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 64px;
  justify-content: center;
  text-align: center;
  padding: 64px 0;
  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;

const LinkFooter = styled(Link)`
  color: black;
  font-weight: bold;
`;
const UnidadeFootContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: -4px;
`;
const InfosFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  align-items: start;
  justify-content: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 32px;
  }
`;
const UnidadesFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
const FooterFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;
const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
const Footer = ({ horario }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <FooterContainer>
      <InfosFooterContainer>
        <UnidadesFooterContainer>
          <UnidadeFootContainer>
            <LinkFooter to="/unidade/iate" onClick={scrollToTop}>
              Iate Clube
            </LinkFooter>
            <p>(61) 98127-0990</p>
          </UnidadeFootContainer>
          <UnidadeFootContainer>
            <LinkFooter to="/unidade/smu" onClick={scrollToTop}>
              Clube do Exército- SMU
            </LinkFooter>
            <p>(61) 98465-0881</p>
          </UnidadeFootContainer>
          <UnidadeFootContainer>
            <LinkFooter to="/unidade/lagosul" onClick={scrollToTop}>
              Lago Sul
            </LinkFooter>
            <p>(61) 99452-5535</p>
          </UnidadeFootContainer>
          {/* <UnidadeFootContainer>
            <LinkFooter to="/unidade/assefaz" onClick={scrollToTop}>
              Clube Olímpico Assefaz
            </LinkFooter>
            <p>(61) 99258-2411</p>
          </UnidadeFootContainer> */}
        </UnidadesFooterContainer>

        {horario && (
          <div>
            <UnidadeFootContainer>
              <h4>Horário de Funcionamento</h4>
              <p>Segunda à sexta</p>
              <h4>7h às 21h</h4>
            </UnidadeFootContainer>
            <UnidadeFootContainer>
              <p>Sábados</p>
              <h4>8h às 12h</h4>
            </UnidadeFootContainer>
            <br />
            <br />
            <UnidadeFootContainer>
              <h4>Horário de Atendimento</h4>
              <p>Segunda à sexta</p>
              <h4>8h às 18h</h4>
            </UnidadeFootContainer>
          </div>
        )}
        <div>
          <LinkFooter to="/unidades" onClick={scrollToTop}>
            Confira os endereços completos
          </LinkFooter>
        </div>
      </InfosFooterContainer>
      <FooterFooter>
        <SocialContainer>
          <Link to="https://www.instagram.com/dumonttennis/" aria-label="instagram" >
            <img src="/icons/instagram1.svg" width="36px" alt="instagram logo" />
          </Link>
        </SocialContainer>
        <img src="/logos/logo_preta.png" alt="" />
        <p>©2023 Dumont Tennis</p>
      </FooterFooter>
    </FooterContainer>
  );
};

export default Footer;
