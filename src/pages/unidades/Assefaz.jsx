import styled from "styled-components";
import CarrosselEstrutura from "../../components/CarrosselEstrutura";
import BotaoAvaliacao from "../../components/BotaoAvaliacao";

import {
  Car,
  ShowerHead,
  Store,
  UtensilsCrossedIcon,
  Wifi,
} from "lucide-react";

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
const Assefaz = () => {
  const fotos = [
    "/assefaz/estrutura/estrutura_assefaz4.jpeg",
    "/assefaz/estrutura/estrutura_assefaz8.jpeg",
    "/assefaz/estrutura/estrutura_assefaz10.jpeg",
    "/assefaz/estrutura/estrutura_assefaz1.jpeg",
    "/assefaz/estrutura/estrutura_assefaz6.jpeg",
    "/assefaz/estrutura/estrutura_assefaz9.jpeg",
    "/assefaz/estrutura/estrutura_assefaz3.jpeg",
    "/assefaz/estrutura/estrutura_assefaz5.jpeg",
  ];
  return (
    <Container>
      <ImageContainer
        style={{
          backgroundImage: `url("/assefaz/estrutura/estrutura_assefaz2.jpeg")`,
        }}
      />
      <InfosContainer>
        <p>
          A unidade do Clube Olímpico Assefaz está localizada no Setor de Clubes
          Esportivos Sul, próxima a ponte Jk e aos principais órgãos do Governo
          em Brasília, atendemos todas as idades, sócios e não sócios do clube,
          oferecemos aulas em grupo, individuais, programa Dumont Kids para
          crianças a partir de 5 anos e o Beach Tenis. <br />
          Marque sua avaliação hoje mesmo!
        </p>
      </InfosContainer>
      <BotaoAvaliacao assefaz={true} iate={false} lagosul={false} smu={false} />
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
          <UtensilsCrossedIcon size={40} />
          <p>Restaurante.</p>
        </IconsContainer>
        <IconsContainer>
          <Store size={40} />
          <p>Lojinha com itens básicos.</p>
        </IconsContainer>
        <IconsContainer>
          <img src="/icons/raquete_tenis.svg" alt="" />
          <p>Serviço de encordamento.</p>
        </IconsContainer>
        <IconsContainer>
          <img src="/icons/rapida.svg" alt="" />
          <p>Quadra de Beach Tennis</p>
        </IconsContainer>
        <IconsContainer>
          <img src="/icons/saibro.svg" alt="" />
          <p>Quadra Saibro</p>
        </IconsContainer>
        <IconsContainer>
          <img src="/icons/paredao.svg" alt="" />
          <p>Paredão</p>
        </IconsContainer>
      </UnidadeOferece>
      <InformacoesContainer>
        <h1>CLUBE OLÍMPICO ASSEFAZ</h1>
        <p>
          Endereço: Clube Olímpico Assefaz SCES, Tr 3 s/n lt 8 <br />
          Estado: Distrito Federal <br />
          Cidade: Brasília <br />
          Bairro: Setor de Clube Esportivos Sul
          <br />
          Telefone: (61) 99258-2411
          <br />
          <br />
          <div>
            <HorariosContainer>
              <h4>Horário das Aulas</h4>
              <p>Segunda à sexta</p>
              <h4>7h às 21h</h4>
            </HorariosContainer>
            <HorariosContainer>
              <p>Sábados</p>
              <h4>8h às 12h</h4>
            </HorariosContainer>
            <br />
            <HorariosContainer>
              <h4>Atendimento da Secretaria</h4>
              <p>Segunda à quinta</p>
              <h4>10h às 20h</h4>
            </HorariosContainer>
            <HorariosContainer>
              <p>Sexta-Feira</p>
              <h4>9h às 19h</h4>
            </HorariosContainer>
            <HorariosContainer>
              <p>Sábado</p>
              <h4>8h às 12h</h4>
            </HorariosContainer>
          </div>
          <br />
        </p>
      </InformacoesContainer>
      <Mapa
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.892924644194!2d-47.85312392408715!3d-15.80959898483289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a235b9b4b9bb9%3A0x75ed071d222a9bc5!2sClube%20Ol%C3%ADmpico%20Assefaz!5e0!3m2!1spt-BR!2sbr!4v1708987591735!5m2!1spt-BR!2sbr"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></Mapa>
    </Container>
  );
};

export default Assefaz;
