import { Nav,Navbar ,NavDropdown} from "react-bootstrap"
import { Link } from "react-router-dom"
export const Sidebar=()=>{
    return(
    <>
     <Navbar expand="lg" className="flex-column" style={{  width: '250px' }}>
         <Navbar.Brand href="#home">SUMAS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="flex-column"> 
                <li className="nav-link text-dark my-2"><Link to='/menber'>አባላት ቁጥጥር</Link></li>
                <li className="nav-link text-dark my-2">የገቢ እና የወጪ ቁጥጥር</li>
                <li className="nav-link text-dark my-2">የትምህርት  ቁጥጥር</li>
                <li className="nav-link text-dark my-2">የውጤት  ቁጥጥር</li>
                <li className="nav-link text-dark my-2">የመርሐ ግብር ቁጥጥር</li>
            </Nav>
        </Navbar.Collapse> 
    </Navbar>
    </>)
}