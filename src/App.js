import styled from 'styled-components'

import setaPlay from './assets/img/seta_play.png'
import icone_erro from "./assets/img/icone_erro.png"
import icone_quase from "./assets/img/icone_quase.png"
import icone_certo from "./assets/img/icone_certo.png"

import React from 'react'

import RenderizarPerguntas from './RenderizarPerguntas'
import LogoContainer from './LogoContainer'


export default function App() {

    const [listaPerguntas, setListaPergunstas] = React.useState([
        { Q: "O que é JSX?", R: "Uma extensão de linguagem do JavaScript", Bott: setaPlay },
        { Q: "O React é?", R: "uma biblioteca JavaScript para construção de interfaces", Bott: setaPlay },
        { Q: "Componentes devem iniciar com?", R: "letra maiúscula", Bott: setaPlay },
        { Q: "Podemos colocar __ dentro do JSX", R: "expressões", Bott: setaPlay },
        { Q: "O ReactDOM nos ajuda", R: "interagindo com a DOM para colocar componentes React na mesma", Bott: setaPlay },
        { Q: "Usamos o npm para", R: "gerenciar os pacotes necessários e suas dependências", Bott: setaPlay },
        { Q: "Usamos props para", R: "passar diferentes informações para componentes", Bott: setaPlay },
        { Q: "Usamos estado (state) para ___", R: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente", Bott: setaPlay }
    ])

    const [interruptor, setInterruptor] = React.useState(true)
    const [PerguntasRespondidas, setPerguntasRespondidas] = React.useState([])
    const [controle, setControle] = React.useState()
    const [ativarZap, setAtivarZap] = React.useState(false)

    function zapLembrar(Btype) {

        if (ativarZap) {
            const listaP = [...listaPerguntas]

            if (Btype === "nãoLembrei") {
                listaP[controle].Bott = icone_erro
            } else if (Btype === 'Quase') {
                listaP[controle].Bott = icone_quase
            } else {
                listaP[controle].Bott = icone_certo
            }
            setInterruptor(true)
            setPerguntasRespondidas([...PerguntasRespondidas, controle])
            setListaPergunstas(listaP)
        }
        setAtivarZap(false)
    }

    return (
        <>
            <ScreenContainer>

                <LogoContainer />

                {listaPerguntas.map((o, i) => <RenderizarPerguntas obj={o} ind={i} interruptor={interruptor} setInterruptor={setInterruptor} PerguntasRespondidas={PerguntasRespondidas} setControle={setControle} setAtivarZap={setAtivarZap} />)}

                <FooterConcluidos>
                    <ContainerBotoes>
                        <ButtonRed onClick={() => zapLembrar('nãoLembrei')}>Não lembrei</ButtonRed>
                        <ButtonYellow onClick={() => zapLembrar('Quase')}>Quase não lembrei</ButtonYellow>
                        <ButtonGreen onClick={() => zapLembrar('Zap')}>Zap!</ButtonGreen>
                    </ContainerBotoes>
                    {PerguntasRespondidas.length}/{listaPerguntas.length} concluídos
                </FooterConcluidos>
            </ScreenContainer>
        </>
    )
}


const ScreenContainer = styled.div`
background-color: #FB6B6B;
width: 100vw;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
margin: 0px;
padding: 0px;
padding-bottom: 200px;
`;


const ContainerBotoes = styled.div`
display: flex;
width: 80%;
justify-content: space-between;
margin: 20px;
`;

const ButtonRed = styled.button`
    width: 90px;
    /* font-family: 'Recursive'; */
    font-family: 'Righteous', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background: #FF3030;
    border-radius: 5px;
    border: 1px solid #FF3030;
    padding:5px;
    margin-left: 10px;
`;

const ButtonYellow = styled.button`
    width: 90px;
    /* font-family: 'Recursive'; */
    font-family: 'Righteous', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background: #FF922E;
    border-radius: 5px;
    border: 1px solid #FF922E;
    padding:5px;
    margin-left: 10px;
`;

const ButtonGreen = styled.button`
    width: 90px;
    /* font-family: 'Recursive'; */
    font-family: 'Righteous', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background: #2FBE34;
    border-radius: 5px;
    border: 1px solid #2FBE34;
    padding:5px;
    margin-left: 10px;
`;

const FooterConcluidos = styled.div`
width: 100%;
min-height: 50px;
background-color: #FFFFFF;
position: fixed;
bottom: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: 'Recursive';
font-weight: 400;
font-size: 18px;
color: #333333;
padding: 10px;
`;