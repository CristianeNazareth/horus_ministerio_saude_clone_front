import './Footer.css'
import React from 'react'
import logo from '../../assets/images/logo.png';

export const Footer = () => 

    <footer className='footer'>
        <div className='container_footer'>
            <div className='container'>
                <p className='container_info'>
                    Suporte a sistemas: 136 - opção 8
                    <br />
                    email:
                    <a href="mailto:suporte.sistemas@datasus.gov.br" title="suporte.sistemas@datasus.gov.br"> suporte.sistemas@datasus.gov.br</a>
                    <br />
                    Fale conosco:
                    {/* <br /> */}
                    <a href="http://datasus.saude.gov.br/fale-conosco" title="http://datasus.saude.gov.br/fale-conosco" rel="noopener noreferrer" target="_blank"> http://datasus.saude.gov.br/fale-conosco</a>
                </p>
                <div className="logo">
                    <img src={logo} alt="logo" />
            
                </div>
            </div>


        </div>

        

    </footer>

export default Footer;

