import ModalidadesLayout, {
  ImageContainer,
  InfosContainer,
  Title,
} from "./ModalidadesLayout";

const AulasIndividuais = () => {
  return (
    <ModalidadesLayout
      title="AULAS INDIVIDUAIS"
      pathCapa="/modalidades/individual/individual1.jpeg"
      // assefaz={true}
      iate={true}
      lagosul={false}
      smu={true}
    >
      <InfosContainer>
        {/* <Title>AULAS INDIVIDUAIS</Title> */}
        <p>
          Para aqueles que buscam aprender ou aprimorar de forma personalizada,
          os treinos são planejados de acordo com as necessidades ou interesses
          do aluno, iniciante ou avançado na aula individual o aluno pode
          treinar detalhes específicos.
        </p>
      </InfosContainer>
      <ImageContainer
        style={{
          backgroundImage: `url("/modalidades/individual/individual.jpeg")`,
        }}
      />
    </ModalidadesLayout>
  );
};

export default AulasIndividuais;
