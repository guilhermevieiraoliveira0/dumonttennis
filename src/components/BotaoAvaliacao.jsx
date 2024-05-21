import React, { useState } from "react";
import styled from "styled-components";
import {
  BackgroundModal,
  BodyModal,
  HeaderModal,
  Icon,
  ModalContainer,
  WhatsappButton,
} from "./WhatsappFlutuante";
import { X } from "lucide-react";

const BotaoContainer = styled.div`
  width: 100vw;
  max-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px 0;
`;

const Botao = styled.button`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffcb22;
  padding: 8px 16px;
  font-size: 26px;
  border: none;
  outline: none;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: #ffcb22;
    border: 2px solid black;
    color: black;
    transition: 0.7s;
  }
`;

const TextoMenor = styled.span`
  font-size: 16px;
  font-weight: regular;
`;
const TextoMaior = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

const BotaoAvaliacao = ({
  iate = true,
  smu = true,
  assefaz = true,
  lagosul = true,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <BotaoContainer onClick={() => setOpen(!open)}>
      {open && (
        <BackgroundModal>
          <ModalContainer>
            <HeaderModal>
              <h3>Aperte na unidade de interesse.</h3>
              <X
                size={32}
                onClick={() => setOpen(!open)}
                style={{ cursor: "pointer" }}
              />
            </HeaderModal>
            <BodyModal>
              {iate && (
                <WhatsappButton href="https://wa.me/5561981270990">
                  <h3>Unidade Iate</h3>
                  <Icon src="/icons/whatsapp_white.svg" alt="" />
                </WhatsappButton>
              )}
              {smu && (
                <WhatsappButton href="https://wa.me/5561984650881">
                  <h3>Unidade SMU</h3>
                  <Icon src="/icons/whatsapp_white.svg" alt="" />
                </WhatsappButton>
              )}
              {lagosul && (
                <WhatsappButton href="https://wa.me/61994525535">
                  <h3>Unidade Lago Sul</h3>
                  <Icon src="/icons/whatsapp_white.svg" alt="" />
                </WhatsappButton>
              )}
              {assefaz && (
                <WhatsappButton href="https://wa.me/5561992582411">
                  <h3>Unidade Assefaz</h3>
                  <Icon src="/icons/whatsapp_white.svg" alt="" />
                </WhatsappButton>
              )}
            </BodyModal>
          </ModalContainer>
        </BackgroundModal>
      )}
      <Botao>
        <TextoMenor>Clique para</TextoMenor>
        <TextoMaior>MARCAR SUA AVALIAÇÃO</TextoMaior>
      </Botao>
    </BotaoContainer>
  );
};

export default BotaoAvaliacao;
