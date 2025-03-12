import Styles from'./Footer.module.css'

const Footer = (props) => {
  return (
   <footer>
    <p>
    Feito com ❤️ por <a href="https://github.com">{props.children}</a>
    </p>
   </footer>
  )
}

export default Footer;