import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Escola from "./pages/Escola.jsx";
import AulasGrupo from "./pages/modalidades/AulasGrupo";
import AulasIndividuais from "./pages/modalidades/AulasIndividuais";
import BeachTenis from "./pages/modalidades/BeachTenis";
import TreinamentoCompetitivo from "./pages/modalidades/TreinamentoCompetitivo";
import Assefaz from "./pages/unidades/Assefaz";
import LagoSul from "./pages/unidades/LagoSul";
import Iate from "./pages/unidades/Iate";
import Layout from "./pages/Layout.jsx";
import DumontKids from "./pages/modalidades/DumontKids.jsx";
import Unidades from "./pages/Unidades";
import ClubeDoExercito from "./pages/unidades/ClubeDoExercito.jsx";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div>
      <Helmet>
        <title>Home - Dumont Tênis</title>
        <script type="application/ld+json">
          {`
                        {
                            "@context": "http://schema.org",
                            "@type": "SportsClub",
                            "name": "Dumont Tênis",
                            "url": "https://www.dumonttennis.com.br",
                            "logo": "https://www.dumonttennis.com.br/logos/logo_amarela.svg",
                            "description": "Escola de tênis com mais de 30 anos de tradição, oferecendo treinamento competitivo e cursos em várias unidades em Brasília.",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Iate Clube de Brasília",
                                "addressLocality": "Brasília",
                                "addressRegion": "DF",
                                "postalCode": "70200-000",
                                "addressCountry": "BR"
                            },
                            "telephone": "+55-61-98127-0990"
                        }
                    `}
        </script>
      </Helmet>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout horario={true}>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/escola"
            element={
              <Layout horario={true}>
                <Escola />
              </Layout>
            }
          />
          <Route
            path="/fotos"
            element={
              <Layout horario={true}>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/contato"
            element={
              <Layout horario={true}>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/dumontkids"
            element={
              <Layout horario={true}>
                <DumontKids />
              </Layout>
            }
          />
          <Route
            path="/aulasemgrupo"
            element={
              <Layout horario={true}>
                <AulasGrupo />
              </Layout>
            }
          />
          <Route
            path="/aulasindividuais"
            element={
              <Layout horario={true}>
                <AulasIndividuais />
              </Layout>
            }
          />
          <Route
            path="/beachtenis"
            element={
              <Layout horario={true}>
                <BeachTenis />
              </Layout>
            }
          />
          <Route
            path="/treinamento"
            element={
              <Layout horario={true}>
                <TreinamentoCompetitivo />
              </Layout>
            }
          />
          <Route
            path="/unidades"
            element={
              <Layout horario={true}>
                <Unidades />
              </Layout>
            }
          />
          {/* <Route
            path="/unidade/assefaz"
            element={
              <Layout horario={false}>
                <Assefaz />
              </Layout>
            }
          /> */}
          <Route
            path="/unidade/smu"
            element={
              <Layout horario={false}>
                <ClubeDoExercito />
              </Layout>
            }
          />
          <Route
            path="/unidade/lagosul"
            element={
              <Layout horario={false}>
                <LagoSul />
              </Layout>
            }
          />
          <Route
            path="/unidade/iate"
            element={
              <Layout horario={false}>
                <Iate />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
