import Styles from './Links.module.css'

const Links = (props) => {
  return (
    <li>
    <a href={props.links}>{props.children}</a>
   </li>
  )
}

export default Links

