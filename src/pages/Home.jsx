import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";

import CardHomeUnidades from "../components/CardHomeUnidades";
import CardHomeModalidade from "../components/CardHomeModalidade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  BackgroundModal,
  BodyModal,
  HeaderModal,
  Icon,
  ModalContainer,
  WhatsappButton,
} from "../components/WhatsappFlutuante";

const HomeContainer = styled.div`
  background-color: black;
  overflow-x: hidden;
`;

const VideoContainer = styled.div`
  width: 100vw;
  height: 400px;
  .video-home {
    width: 100vw;
    height: 400px;
    object-fit: cover;
    z-index: 0;
  }
  @media screen and (min-width: 768px) {
    width: 100vw;
    height: 824px;
    display: flex;
    justify-content: center;
    .video-home {
      position: absolute;
      top: 100px;
      left: 0;
      width: 100vw;
      height: 824px;
      object-fit: cover;
      z-index: 0;
    }
  }
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
`;
const SeccaoContainer = styled.div`
  padding-top: 16px;
  width: 100vw;
  height: auto;
  text-align: center;
`;

const CarrosselContainer = styled.div`
  .swiper-container .swiper-slide {
    width: 300px;
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: #ffcc2b;
  }
  .swiper-pagination-bullet-active {
    background: #ffcc2b;
  }
  .swiper-slide-active {
    width: 300px;
  }
  .swiper-slide-nex {
    width: 300px;
  }
`;

const Title = styled.button`
  font-size: 22px;
  color: #ffcc2b;
  background-color: transparent;
  border: none;
  outline: none;
  font-weight: bold;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`;

const SubTitle = styled.p`
  font-size: 16px;
  font-weight: 200;
  color: #ffcc2b;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    font-weight: 200;
    color: #ffcc2b;
    margin-bottom: 32px;
  }
`;

const ModalidadesContainer = styled.div`
  padding-top: 128px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const SobreContainer = styled.div`
  background-color: black;
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
    background-color: black;
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
  color: #ffcc2b;
  width: 60%;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Home = () => {
  const videoRef = useRef(null);
  const [modal, setModal] = useState(false);
  useEffect(() => {
    const playPromise = videoRef.current.play();
  }, []);
  return (
    <HomeContainer>
      {modal && (
        <BackgroundModal>
          <ModalContainer>
            <HeaderModal>
              <h3>Aperte na unidade de interesse.</h3>
              <X
                size={32}
                onClick={() => setModal(!modal)}
                style={{ cursor: "pointer" }}
              />
            </HeaderModal>
            <BodyModal>
              <WhatsappButton href="https://wa.me/5561981270990">
                <h3>Unidade Iate</h3>
                <Icon src="/icons/whatsapp_white.svg" alt="" />
              </WhatsappButton>
              <WhatsappButton href="https://wa.me/5561984650881">
                <h3>Unidade SMU</h3>
                <Icon src="/icons/whatsapp_white.svg" alt="" />
              </WhatsappButton>
              <WhatsappButton href="https://wa.me/5561994525535">
                <h3>Unidade Lago Sul</h3>
                <Icon src="/icons/whatsapp_white.svg" alt="" />
              </WhatsappButton>
              <WhatsappButton href="https://wa.me/5561992582411">
                <h3>Unidade Assefaz</h3>
                <Icon src="/icons/whatsapp_white.svg" alt="" />
              </WhatsappButton>
            </BodyModal>
          </ModalContainer>
        </BackgroundModal>
      )}
      <VideoContainer>
        <Video
          src="VideoHome.mp4"
          className="video-home"
          muted
          loop
          playsInline
          ref={videoRef}
        />
      </VideoContainer>
      <SeccaoContainer>
        <Title onClick={() => setModal(!modal)}>MARQUE SUA AVALIAÇÃO</Title>
        <SubTitle>em uma de nossas unidades em Brasília</SubTitle>
        <CarrosselContainer>
          <Swiper
            slidesPerView={1}
            modules={[Pagination, Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              768: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="swiper-container"
          >
            <SwiperSlide className="swiper-slide">
              <ImageContainer>
                <CardHomeUnidades
                  image="/iate/estrutura/estrutura_iate10.jpeg"
                  srcSet="iate/estrutura/estrutura_iate10-300.jpeg 300w"
                  label="IATE CLUBE DE BRASÍLIA"
                  unidade="iate"
                />
              </ImageContainer>
            </SwiperSlide>
            <SwiperSlide style={{ width: "300px", marginRight: "0" }}>
              <ImageContainer>
                <CardHomeUnidades
                  image="/smu/smu.jpg"
                  label="CLUBE DO EXÉRCITO DO SETOR DO MILITAR URBANO - SMU"
                  unidade="smu"
                />
              </ImageContainer>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <ImageContainer>
                <CardHomeUnidades
                  image="/assefaz/estrutura/estrutura_assefaz2.jpeg"
                  label="CLUBE OLÍMPICO ASSEFAZ"
                  unidade="assefaz"
                />
              </ImageContainer>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <ImageContainer>
                <CardHomeUnidades
                  image="/lagosul/estrutura/estrutura_lago4.jpeg"
                  label="LAGO SUL"
                  unidade="lagosul"
                />
              </ImageContainer>
            </SwiperSlide>
            <div className="swiper-button-prev">
              <ChevronLeft color="white" size={30} />
            </div>
            <div className="swiper-button-next">
              <ChevronRight color="white" size={30} />
            </div>
          </Swiper>
        </CarrosselContainer>
        <ModalidadesContainer>
          <CardHomeModalidade
            title="DUMONT"
            subtitle="KIDS"
            imagem="/cardsModalidades/kids2.jpeg"
            path="/dumontkids"
          />
          <CardHomeModalidade
            title="AULAS"
            subtitle="EM GRUPO"
            imagem="/cardsModalidades/grupo.jpeg"
            path="/aulasemgrupo"
          />
          <CardHomeModalidade
            title="TREINAMENTO"
            subtitle="COMPETITIVO"
            imagem="/cardsModalidades/treinamento.jpeg"
            path="/treinamento"
          />
          <CardHomeModalidade
            title="AULAS"
            subtitle="INDIVIDUAIS"
            imagem="/cardsModalidades/individual.jpeg"
            path="/aulasindividuais"
          />
          <CardHomeModalidade
            title="BEACH"
            subtitle="TENNIS"
            imagem="/cardsModalidades/beachtenis.jpeg"
            path="/beachtenis"
          />
        </ModalidadesContainer>
      </SeccaoContainer>
      <SobreContainer>
        <img src="/logos/doit_amarela.png" alt="" />
        <TextSobre>
          A Dumont Tênis é uma escola que possui tradição em treinamento
          competitivo. Com mais de 30 anos em Brasília e sede no Iate Clube de
          Brasília, desenvolveu um sistema de aprendizado que combina qualidade
          de ensino, prática e teoria, sendo essa sua marca registrada. Agora,
          com unidades também no Clube do Exército no Setor Militar Urbano, no
          Clube Olímpico Assefaz e na QI 23 do Lago Sul, a Dumont Tênis oferece
          a todos os interessados a oportunidade de conhecer, aprender, jogar e
          se divertir com esse esporte tão saudável.
        </TextSobre>
      </SobreContainer>
    </HomeContainer>
  );
};

export default Home;
