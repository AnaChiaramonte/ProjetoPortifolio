import styles from "./Perfil.module.css";

const Perfil = (props) => {
  return (
    <div id={styles.perfil}>
      <img src={props.fotoPerfil} alt="" />
      <div className={styles.textoPerfil}>{props.children}</div>
    </div>
  );
};

export default Perfil;
