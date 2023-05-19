import './app.css'
import React from 'react'

import {Header} from '../components/template/header'
import {Main} from '../components/template/main'
import {Footer} from '../components/template/footer'



export const App = props => (
    // <h2>Teste cris</h2>
    <div className='app'>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
    </div>

)