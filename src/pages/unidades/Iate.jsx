import styled from "styled-components";
import CarrosselEstrutura from "../../components/CarrosselEstrutura";
import { Car, ShowerHead, UtensilsCrossed, Wifi } from "lucide-react";
import BotaoAvaliacao from "../../components/BotaoAvaliacao";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;
const ImageContainer = styled.div`
  width: 100vw;
  height: 250px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    height: 490px;
  }
`;
const Mapa = styled.iframe`
  width: 100vw;
  height: 500px;
  margin-top: 32px;
  border: none;
  outline: none;
`;

const InformacoesContainer = styled.div`
  width: 100%;
  text-align: left;
  padding: 0 32px;
  margin: 16px 0;
  @media screen and (min-width: 768px) {
    padding: 0 360px;
  }
`;

const UnidadeOferece = styled.div`
  width: 100%;
  text-align: left;
  padding: 0 32px;
  margin: 16px 0;
  @media screen and (min-width: 768px) {
    padding: 0 360px;
  }
`;

const IconsContainer = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 16px;
  margin: 8px 0;
  text-align: left;
`;
const InfosContainer = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 16px 32px;
  gap: 8px;
  @media screen and (min-width: 768px) {
    padding: 32px 300px;
  }
`;
const HorariosContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: -4px;
`;
const Iate = () => {
  const fotos = [
    "/iate/estrutura/estrutura_iate7.jpeg",
    "/iate/estrutura/estrutura_iate8.jpeg",
    "/iate/estrutura/estrutura_iate3.jpeg",
    "/iate/estrutura/estrutura_iate2.jpeg",
    "/iate/estrutura/estrutura_iate4.jpeg",
    "/iate/estrutura/estrutura_iate1.jpeg",
  ];
  return (
    <Container>
      <ImageContainer
        style={{
          backgroundImage: `url("/iate/estrutura/estrutura_iate10.jpeg")`,
        }}
      />
      <InfosContainer>
        <p>
          A unidade Iate Clube de Brasília, está localizada no Setor de Clubes
          Esportivos Norte, onde funciona nosso centro de treinamento
          competitivo e o programa Dumont Kids para crianças a partir de 5 anos,
          temos opções de aulas em grupo ou individual para adultos. <br />{" "}
          Marque sua avaliação hoje mesmo!
        </p>
      </InfosContainer>
      <BotaoAvaliacao iate={true} lagosul={false} smu={false} />
      <CarrosselEstrutura unidade="iate" fotos={fotos} />
      <UnidadeOferece>
        <h2>A unidade oferece:</h2>
        <IconsContainer>
          <Wifi size={40} strokeWidth={3} />
          <p>Wifi gratuito</p>
        </IconsContainer>
        <IconsContainer>
          <ShowerHead size={40} />
          <p>Vestiário masculino e feminino</p>
        </IconsContainer>
        <IconsContainer>
          <Car size={40} />
          <p>Estacionamento amplo, gratuito e seguro</p>
        </IconsContainer>
        <IconsContainer>
          <UtensilsCrossed size={40} />
          <p>Restaurante e Lanchonete.</p>
        </IconsContainer>
        <IconsContainer>
          <img src="/icons/quadra.svg" alt="" />
          <p>Quadra Coberta</p>
        </IconsContainer>
        <IconsContainer>
          <img src="/icons/rapida.svg" alt="" />
          <p>Quadra Rápida</p>
        </IconsContainer>
        <IconsContainer>
          <img src="/icons/saibro.svg" alt="" />
          <p>Quadra de Saibro</p>
        </IconsContainer>
      </UnidadeOferece>
      <InformacoesContainer>
        <h1>IATE CLUBE DE BRASÍLIA</h1>
        <p>
          Endereço: Setor de Clubes Esportivos Norte, Trecho 2 Conjunto 4
          <br />
          Estado: Distrito Federal
          <br />
          Cidade: Brasília
          <br />
          Telefone: (61) 98127 0990
          <br />
          <br />
          <div>
            <HorariosContainer>
              <h4>Horário das Aulas</h4>
              <p>Segunda à sexta</p>
              <h4>7h às 21h</h4>
            </HorariosContainer>
            <br />
            <HorariosContainer>
              <h4>Atendimento da Secretaria</h4>
              <p>Segunda à sexta</p>
              <h4>8h às 18h</h4>
            </HorariosContainer>
          </div>
          <br />
        </p>
      </InformacoesContainer>
      <Mapa
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.4808189736273!2d-47.86394312408749!3d-15.77858118485965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3bb5c57ba4fb%3A0x103c11f684bf60ab!2sIate%20Clube%20de%20Bras%C3%ADlia%20-%20Portaria%20Sul%20(Principal)!5e0!3m2!1spt-BR!2sbr!4v1708987490499!5m2!1spt-BR!2sbr"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></Mapa>
    </Container>
  );
};

export default Iate;
