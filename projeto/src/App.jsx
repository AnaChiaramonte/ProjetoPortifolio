import "./App.css";
import Perfil from "./components/perfil/perfil";
import Links from "./components/links/Links";
import Footer from "./components/footer/Footer";
import SocialLinks from "./components/socialLinks/SocialLinks";
import SobreMim from "./components/sobreMim/SobreMim";
import { useState } from "react";

const App = () => {
  const [texto, setTexto] = useState(true);

  return (
    <div id="App">
      <Perfil>@Ana Clara Chiaramonte Lopes</Perfil>
      <SobreMim texto={"texto"} />

      <div id="container">
        <ul>
          <Links link={"https://Youtube.com/"}>Projetos</Links>
          <Links link={"https://linkedin.com/"}>Contato </Links>
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
      </div>
      <Footer>Ane Leure</Footer>
    </div>
  );
};

export default App;
