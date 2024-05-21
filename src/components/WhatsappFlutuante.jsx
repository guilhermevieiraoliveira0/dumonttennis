import { X } from "lucide-react";
import { useState } from "react";
import styled from "styled-components";

const BackgroundContainer = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #25d366;
  position: fixed;
  border-radius: 50%;
  right: 1em;
  bottom: 2rem;
  z-index: 10;
  @media screen and (min-width: 768px) {
    right: 2em;
    bottom: 50vh;
  }
`;
const BotaoContainer = styled.button`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #25d366;
  outline: none;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: #32b863;
  }
`;
export const Icon = styled.img`
  width: 32px;
  height: 32px;
  color: white;
`;

export const BackgroundModal = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  width: 90vw;
  border-radius: 20px;
  padding: 16px;
  background-color: white;
  @media screen and (min-width: 768px) {
    width: 20vw;
  }
`;

export const HeaderModal = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;
export const BodyModal = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 16px;
`;
export const WhatsappButton = styled.a`
  width: 100%;
  height: 30px;
  background-color: #25d366;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px;
  border-radius: 10px;
  text-decoration: none;
  h3 {
    color: white;
  }
  &:hover {
    background-color: #32b863;
  }
`;
const WhatsappFlutuante = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
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
              <WhatsappButton href="https://wa.me/61994525535">
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
      <BackgroundContainer>
        <BotaoContainer onClick={() => setModal(!modal)}>
          <Icon src="/icons/whatsapp_white.svg" alt="" />
        </BotaoContainer>
      </BackgroundContainer>
    </>
  );
};

export default WhatsappFlutuante;
