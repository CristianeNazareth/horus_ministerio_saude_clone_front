import React from "react"
import './accessLogin.css'
import { Button } from "../Button";

export const AcessLogin = () => (

    <form>
        <div>
            <label htmlFor="field_email">
                <p className='txt_email'>Email:</p>
                <input type="text" id='field_email' name="email" />
            </label>                            
        </div>

        <div>
            <label htmlFor="field_password">
                <p className='txt_pass'>Senha de Acesso:</p>
                <input type="number" id="field_password" name="password" />
            </label>
        </div>

        {/* <div className="">
            <Button iconUrl="https://scaweb.saude.gov.br/scaweb/imagens/ico_acessar.gif" text="Acessar" ></Button>
            <Button iconUrl="https://scaweb.saude.gov.br/scaweb/imagens/ico_alterar.gif" text="Alterar"></Button>
            <Button iconUrl="https://scaweb.saude.gov.br/scaweb/imagens/ico_lembrar.gif" text="Lembrar"></Button>
        </div> */}

    </form>
)

export default AcessLogin;