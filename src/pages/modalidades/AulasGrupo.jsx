import BotaoAvaliacao from "../../components/BotaoAvaliacao.jsx";
import ModalidadesLayout, {
  InfosContainer,
  ImageContainer,
} from "./ModalidadesLayout.jsx";
const AulasGrupo = () => {
  return (
    <ModalidadesLayout
      title="AULAS EM GRUPO"
      pathCapa="/modalidades/aulasGrupo/aula_grupo2.jpeg"
      // assefaz={true}
      iate={true}
      lagosul={true}
      smu={true}
    >
      <InfosContainer>
        <p>
          As aulas em grupo são montadas de acordo com nível de desenvolvimento,
          são dinâmicas pois as turmas possuem até 4 pessoas, com duração de uma
          hora abrangem aquecimento, técnica, tática, alimentação e jogos. Sendo
          uma excelente opção para além de treinar e desenvolver tecnicamente
          jogando com pessoas do mesmo nível, socializar, fazer novas amizades e
          possibilidades marcar jogos além das aulas.
        </p>
      </InfosContainer>
    </ModalidadesLayout>
  );
};

export default AulasGrupo;
