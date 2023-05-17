import './app.css'
import React from 'react'

import {Header} from '../components/template/header'
import {Logo} from '../components/template/logo'
import {Main} from '../components/template/main'
import {Footer} from '../components/template/footer'



export const App = props => (
    // <h2>Teste cris</h2>
    <div className='app'>
        <Header></Header>
        <Main></Main>
        <Logo></Logo>
        <Footer></Footer>
    </div>

)