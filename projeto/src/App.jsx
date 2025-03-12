import "./App.css";
import Perfil from "./components/perfil/perfil";
import Links from "./components/links/Links";
import Footer from "./components/footer/Footer";
import SocialLinks from "./components/socialLinks/SocialLinks";
import SobreMim from "./components/sobreMim/SobreMim";
import fotoPerfil from "./img/eumesma.png";

const App = () => {
  return (
    <div id="App">
      <Perfil fotoPerfil={fotoPerfil}>@Ana Clara Chiaramonte Lopes</Perfil>
      <SobreMim />

      <div id="container">
        <ul>
          <Links
            links={
              "https://www.educamaisbrasil.com.br/educacao/carreira/psicologia-criminal-o-que-e-e-como-atuar-na-areahttps://Youtube.com/"
            }
          >
            {" "}
            Projetos{" "}
          </Links>
          <Links links={"https://wa.link/9m17tw"}>Contato </Links>
        </ul>
      </div>
      <div id="socialLinks">
        <SocialLinks
          link={"https://github.com/AnaChiaramonte"}
          icon={"logo-github"}
        />
        <SocialLinks
          link={"https://Insagram.com/anaaalopeess"}
          icon={"logo-Instagram"}
        />
        <SocialLinks link={"https://Youtube.com/"} icon={"logo-youtube"} />
        <SocialLinks link={"https://linkedin.com/"} icon={"logo-linkedin"} />
      </div>

      <Footer> Ane Leure</Footer>
    </div>
  );
};

export default App;
