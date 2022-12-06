import React from 'react';
import {
    Link
  } from "react-router-dom";
import { Navbar, Container, Nav} from 'react-bootstrap';


const MenuNavigation = () => {
   
    return (
       <header>
           <Navbar className="light" expand="lg">
                <Container>
                    <div className='nav_bar_flex'>
                        <div className='toggle'>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Link className='header_home' to='/'>Главная</Link>   
                        </div>         
                        <Link className='header_basket' to='/basket'>Корзина</Link>
                    </div>
                     
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='bar_header_home' to='/'>Главная</Link>
                            <Link to='/pizza'>Пицца</Link>
                            <Link to='/snacks'>Закуски</Link>
                            <Link to='/drinks'>Напитки</Link>
                            <Link to='/admin'>ADMIN</Link>
                            <Link className='bar_header_basket' to='/basket'>Корзина</Link>
                        </Nav>
                    </Navbar.Collapse>
                
                </Container>
            </Navbar>
           
        </header>
    );
};

export default  MenuNavigation;