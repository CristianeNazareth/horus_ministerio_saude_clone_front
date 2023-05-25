import React from "react"
import './textLogin.css'



export const TextLogin = () => (

    <form action="">
        <span className='emphasis'>ORIENTAÇÕES SOBRE SENHA DE ACESSO!</span>
        <br />
        <span className='span_content'>As senhas de acesso agora fazem distinção entre Letras: Maiúsculas e Minúsculas.</span>
        <br />
        <span className='span_content'>Para as senhas já cadastradas: As Letras da Senha devem ser digitadas em Caixa Alta (MAIÚSCULAS).</span>
        <br />
        <span className='emphasis'>Atenção!&nbsp;</span>
        <span className='span_content'>A forma de identificação foi alterada! Passa a ser feita pelo e-mail em substituição ao CPF.</span>
        <br />
        <span className='emphasis'>Acesso aos Sistemas:&nbsp;</span>
        <span className='span_content'>Para ter acesso aos sistemas de informação do Ministério da Saúde é necessário que o usuário informe o seu email e senha.</span>
        <br />
        <span className='emphasis'>Alterar Senha:&nbsp;</span>
        <span className='span_content'>Informe seu email e Senha e clique em "Alterar Senha".</span>
        <br />&nbsp;
        <span className='emphasis'>Lembrar Senha:&nbsp;</span>
        <span className='span_content'>Informe seu email e clique em "Lembrar Senha" para receber uma senha provisória no seu e-mail.</span>
        <br />
        <span className='emphasis'>Usuários que não possuem acesso:&nbsp;</span>
        <span className='span_content'>
            Deverão entrar em contato com o Gestor do Sistema ou preencher o &nbsp;
            <a class="link_emphasis" href="solicitacaoUsuario.do?acao=gravarNovaSolicitacao">Cadastro de Novo Usuário&nbsp;</a>
            e aguardar a autorização do Gestor.
        </span>
        <br />
        <span className='emphasis'>Atenção!&nbsp;</span>
        <span className='span_content'>Caso o Teclado Virtual para informar a senha não apareça, verifique se o browser está configurado para ter suporte ao Java ou baixe o software Java no seguinte endereço:&nbsp;<a class="link_emphasis" href="http://www.java.com/pt_BR/" target="_blank">http://www.java.com/pt_BR/</a></span>
    </form>

)

export default TextLogin;