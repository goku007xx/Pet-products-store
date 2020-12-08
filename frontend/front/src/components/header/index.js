import React from 'react'
import { Box, Container, Row, Col , Jumbotron , Button , Nav ,NavDropdown, Navbar, Image,Form} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink,Link} from 'react-router-dom';
import { signout } from '../../actions/auth.actions';
/**
* @author
* @function Header
**/

const Header = (props) => {

    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(signout());
    }

    const renderLoggedInLinks = () => {
        return(
            <Nav>
                  <li className="nav-item">
                      <span className="nav-link" onClick={logout}>SIGNOUT</span>
                  </li>
            </Nav>
        )

    }

    const renderNonLoggedInLinks = () => {
        return(
            <Nav>
                  <li className="nav-item">
                      <NavLink to="signin" className="nav-link">ADMIN SIGNIN</NavLink>
                  </li>
            </Nav>
        )

    }





  return(
    <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark" style={{zIndex:1}}>
        <Container fluid>
            <Link to="/" className="navbar-brand">PETZANZA</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}
            </Navbar.Collapse>
            
        </Container>
    </Navbar>
   )

 }

export default Header