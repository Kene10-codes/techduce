import React, { useState } from 'react';
import { 
    Collapse, 
    Navbar, 
    NavbarToggler, 
    NavbarBrand, 
    Nav, 
    NavItem, 
    NavLink,
    Button
 } 
    from 'reactstrap'
import BgColor from '../common/BgColor'
import quill_logo from '..//assets/quill.svg'
import styles from './navbar.module.css'

const NavbarComponenet = (props) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
  
    return (
        <div>
          <BgColor />
          <Navbar expand="md">
           <NavbarBrand href="/" className="mr-auto">
               <img src={quill_logo} alt="Quillow logo"/>
              <span className={styles.logo}>Quillow</span> 
            </NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
             <Collapse isOpen={!collapsed} navbar>
            <Nav navbar className="mx-auto">
             <NavItem>
               <NavLink className={styles.navLink} href="#">Courses</NavLink>
             </NavItem>
             <NavItem>
              <NavLink className={styles.navLink} href="#">Blog</NavLink>
             </NavItem>
             <NavItem>
              <NavLink className={styles.navLink} href="#">About</NavLink>
             </NavItem>
           </Nav>
           <Nav navbar className="ml-auto">
             <Button className={styles.btn}>Login</Button>
             </Nav>
          </Collapse>
         </Navbar>
        </div>
    )
}

export default NavbarComponenet



