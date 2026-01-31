import ModalidadesLayout, {
  ImageContainer,
  InfosContainer,
  Title,
} from "./ModalidadesLayout";

const BeachTenis = () => {
  return (
    <ModalidadesLayout
      // title="BEACH TENNIS"
      // pathCapa="/modalidades/dumontkids/dumontkids2.jpeg"
      // assefaz={true}
      iate={false}
      lagosul={true}
      smu={false}
    >
      <InfosContainer>
        <Title>BEACH TENNIS</Title>
        <p>
          Oferecemos aulas de Beach Tennis em grupo no Lago Sul, com turmas de
          até 6 pessoas, incluindo escolinha para crianças. As aulas trazem uma
          abordagem de alguns itens básicos como aquecimento, alongamento,
          técnica, alimentação e jogos, adequadas para todas as idades.
        </p>
      </InfosContainer>
      {/* <ImageContainer
        style={{
          backgroundImage: `url("/modalidades/dumontkids/dumontkids3.jpeg")`,
        }}
      /> */}
    </ModalidadesLayout>
  );
};

export default BeachTenis;
