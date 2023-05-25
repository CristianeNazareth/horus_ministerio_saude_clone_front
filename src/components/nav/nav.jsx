import './nav.css'
import React from 'react'
import { Button } from '../Button/Button';

export const Nav = () => 

    <nav className='nav'>
        <div className="nav_nav"></div>
        <div className='nav_navegacao'>
            <Button iconUrl='https://scaweb.saude.gov.br/scaweb/imagens/ico_contato_navega.gif' text=''></Button>
            <a className="nav_contat" href="https://scaweb.saude.gov.br/scaweb/acessoMenu.do?acao=listaEmailGestor">Contato</a>
            &nbsp;&nbsp;1.0.6.3
        </div>
        
    </nav>

export default Nav;

