import TouristImage from "../images/Tourist.png";
import { pageLinks } from "../data";
const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top " >
      <div className="container-fluid">
        <a className="navbar-brand" href="/#">
        <img src={TouristImage} alt="Tourist-img" className="tourist-img"/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#tourist" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
        </button>
            <div className="collapse navbar-collapse" id="tourist">
                <div className="navbar-nav ms-auto">
                  {
                    pageLinks.map(({id, href, text})=>{
                      return <a key={id} className="nav-link active" href={href}>{text}</a>
                    })
                  }
                </div>
            </div>
      </div>
    </nav>
  </>
  )
}
export default Navbar