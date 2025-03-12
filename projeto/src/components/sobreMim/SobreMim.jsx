import styles from './SobreMim.module.css'

const SobreMim = (props) => {
  return (
    <div onClick={props.texto} id={styles.SobreMim}>
      <button>Sobre Mim</button>
      <span></span>
      </div>
  )
}

export default SobreMim;