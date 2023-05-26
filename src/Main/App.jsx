import './App.css'
import React from 'react'

import Header from '../components/Header/Header.jsx'
import TextLogin from '../components/TextLogin/TextLogin'
import AcessLogin from '../components/AccessLogin/AccessLogin'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'


export const App = () => (
    <div className='app'>
        <Header></Header>
        <main className='content'>
            <Nav></Nav>

            <AcessLogin></AcessLogin>

            <TextLogin></TextLogin>
        </main>
        <Footer></Footer>

    </div>
)

export default App;