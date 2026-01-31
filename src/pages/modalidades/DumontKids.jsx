import ModalidadesLayout, {
  InfosContainer,
  ImageContainer,
  Container,
} from "./ModalidadesLayout.jsx";

const DumontKids = () => {
  return (
    <ModalidadesLayout
      title="DUMONT KIDS"
      pathCapa="/modalidades/dumontkids/dumontkids2.jpeg"
      // assefaz={true}
      iate={true}
      lagosul={true}
      smu={true}
    >
      <Container>
        <p>
          A Dumont Kids oferece uma abordagem única para introduzir as crianças
          no mundo do tênis, com uma metodologia própria e utilização de
          materiais adequados e adaptados, para tornar o aprendizado uma
          experiência divertida e cativante. As aulas são planejadas para
          estimular o desenvolvimento físico, mental e emocional dos pequenos
          tenistas, incluindo jogos e atividades lúdicas para ensinar os
          fundamentos do esporte, ao mesmo tempo em que desenvolvem habilidades
          essenciais como coordenação motora, concentração e trabalho em equipe.
        </p>
      </Container>
      <ImageContainer
        style={{
          backgroundImage: `url("/modalidades/dumontkids/dumontkids7.jpeg")`,
        }}
      />
      <InfosContainer>
        <p>
          Com ênfase na progressão gradual e no apoio de instrutores
          experientes, a Dumont Kids promove valores como disciplina, respeito e
          determinação, preparando as crianças não apenas para se destacarem no
          tênis, mas também para enfrentarem desafios em todas as áreas de suas
          vidas. Essa experiência enriquecedora e inspiradora oferece uma
          preparação sólida para um futuro promissor dentro e fora das quadras
          de tênis, convidando os mais jovens talentos a se juntarem a essa
          experiência inesquecível.
        </p>
      </InfosContainer>
    </ModalidadesLayout>
  );
};

export default DumontKids;
