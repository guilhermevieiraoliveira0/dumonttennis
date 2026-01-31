import ModalidadesLayout, {
  ImageContainer,
  InfosContainer,
  Title,
} from "./ModalidadesLayout";

const TreinamentoCompetitivo = () => {
  return (
    <ModalidadesLayout iate={true} lagosul={false} smu={false}>
      <InfosContainer>
        <Title>EQUIPE</Title>
        <p>
          Jovens que estão jogando torneios estaduais, nacionais e
          internacionais. <br />
          CARGA HORÁRIA: <br />
          Três horas e meia diárias. <br />
          De 3 à 5 vezes por semana, sob orientação técnica. 30 minutos de
          aquecimento; <br />
          2 horas de quadra; <br />
          1 hora de preparação física. <br />
          A Clínica de treinamento conta com: Preparador Físico; <br />
          Parcerias com psicólogo, nutricionista e fisioterapeuta; <br />
          Planejamento de calendário para torneios; <br />
          Acompanhamento em torneios; <br />
          Quadras de saibro, piso rápido e quadras cobertas. <br />
          Os treinamentos acontecem de segunda à sexta das 14h00 às 18h
        </p>
      </InfosContainer>
      <InfosContainer>
        <Title>PRÉ-EQUIPE</Title>
        <p>
          Jovens que estão começando a treinar de forma competitiva com objetivo
          de começar a jogar torneios. <br />
          CARGA HORÁRIA: De 1(uma) à 2(duas) horas diárias, de 2 à 5 vezes por
          semana de acordo com a idade e desenvolvimento, sob avaliação técnica.
        </p>
      </InfosContainer>
      <InfosContainer>
        <Title>Tenis Universitário</Title>
        <p>
          O tênis abre muitos caminhos para os atletas, além da busca para se
          tornar profissional muitos jogadores conseguem bolsas de estudos em
          universidades fora do país através do esporte, assim eles podem
          garantir os estudos com a oportunidade de continuar jogando.
        </p>
      </InfosContainer>
      <InfosContainer>
        <Title>PRÉ-TEMPORADA</Title>
        <p>
          A pré-temporada acontece sempre nos meses de julho, dezembro e
          janeiro, nesses meses os atletas estão de férias podendo assim
          intensificar os trabalhos, treinando dois períodos para se preparar
          para o semestre e para o ano. Recebemos atletas de vários estados e de
          outros países.
        </p>
      </InfosContainer>
    </ModalidadesLayout>
  );
};

export default TreinamentoCompetitivo;
