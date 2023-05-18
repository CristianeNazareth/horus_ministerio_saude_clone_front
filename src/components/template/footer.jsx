import './footer.css'
// import {Logo} from './logo'
import React from 'react'

export const Footer = props => 

    <footer className='footer'>
        <div className='container'>
            <p className='container_info'>
                Suporte a sistemas: 136 - opção 8
                <br />
                email:
                <a href="mailto:suporte.sistemas@datasus.gov.br" title="suporte.sistemas@datasus.gov.br"> suporte.sistemas@datasus.gov.br</a>
                <br />
                Fale conosco:
                {/* <br /> */}
                <a href="http://datasus.saude.gov.br/fale-conosco" title="http://datasus.saude.gov.br/fale-conosco" target="_blank"> http://datasus.saude.gov.br/fale-conosco</a>
            </p>
            <aside className="logo">
                <img src="{logo}" alt="logo" />
                
            </aside>


        </div>

        

    </footer>


// p
// br

// br
// 

