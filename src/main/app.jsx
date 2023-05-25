import './app.css'
import React from 'react'

import Header from '../components/header/header.jsx'
import TextLogin from '../components/textLogin/textLogin'
import AcessLogin from '../components/accessLogin/accessLogin'
import Nav from '../components/nav/nav'
import { Button } from '../components/Button'
import Footer from '../components/footer/footer'

// import {IconUrl} from '../components/iconUrl/iconUrl'
// export const App = props => (
//     <div className='app'>
//         <Header></Header>
//         <Main></Main>
//         <Footer></Footer>
//     </div>
// )

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