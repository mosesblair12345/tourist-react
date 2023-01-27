import { socialLinks } from "../data";

const Footer = () => {
    const year=new Date().getFullYear();
  return (
    <>
    <footer className="section footer">
      <ul className="footer-icons">
           {
              socialLinks.map(({id, href, icon})=>{
                 return <li key={id} ><a href={href} className="footer-icon" rel="noreferrer" target="_blank"><i className={icon}/></a></li>
              })
           }
      </ul>
      <p className="copyright">
        copyright &copy; Tourist company
        <span>{year}</span> all rights reserved
      </p>
    </footer>
    </>
  )
}
export default Footer