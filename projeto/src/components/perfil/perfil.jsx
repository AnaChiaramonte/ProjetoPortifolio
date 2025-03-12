import styles from "./Perfil.module.css";

const Perfil = (props) => {
  return (
    <div id={styles.perfil}>
        <img src={props.fotoPerfil} alt="" />
        <p>{props.children}</p>
       
    </div>
  )
}

export default Perfil;
