import { useState } from "react";
import styles from "./SobreMim.module.css";

function SobreMim() {
  const [texto, setTexto] = useState(false);
  return (
    <div id={styles.SobreMim}>
      <button onClick={() => setTexto(!texto)}>Sobre Mim</button>
      {texto && (
        <div className={styles.texto}>
          Sou Ana Clara, tenho 17 anos e estou terminando o ensino médio. Faço
          curso de Desenvolvimento de Sistemas no SENAI, mas meu verdadeiro
          interesse está na Psicologia e na perícia criminal. Busco unir
          tecnologia e comportamento humano para entender melhor a mente e a
          investigação criminal. Sou curiosa, determinada e sempre em busca de
          novos aprendizados.
        </div>
      )}
    </div>
  );
}
export default SobreMim;
