import styled from 'styled-components'


import logo from './assets/img/logo.png'
import setaPlay from './assets/img/seta_play.png'
import icone_erro from "./assets/img/icone_erro.png"
import icone_quase from "./assets/img/icone_quase.png"
import icone_certo from "./assets/img/icone_certo.png"


import setarVirar from "./assets/img/seta_virar.png"

import React from 'react'

// import RenderizarPerguntas from './RenderizarPerguntas'




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



    function RenderizarPerguntas(obj, ind) {

        const [PerguntasAbertas, setPerguntasAbertas] = React.useState([])
    
        const [PerguntasClicadas, setPerguntasClicadas] = React.useState([])
    
        if (PerguntasRespondidas.includes(ind)) {
            return (
                <footer className='pergunta-fechada' key={ind}>
                    <p>Pergunta {ind + 1}</p>
                    <img src={obj.Bott} alt="" />
                </footer>
            )
        }
        else if (PerguntasClicadas.includes(ind)) {
    
            if (PerguntasAbertas.includes(ind)) {
                return (
                    <div className='pergunta-aberta' key={ind}>
                        {obj.R}
                        {/* <img src={setarVirar} alt='' onClick={() => TrocarBotton(ind)} /> */}
                    </div>
                )
            } else {
                return (
                    <div className='pergunta-aberta' key={ind}>
                        {obj.Q}
                        <img src={setarVirar} alt='' onClick={() => {
                            setPerguntasAbertas([...PerguntasAbertas, ind])
                            setControle(ind)
                            setAtivarZap(true)
                        }} />
                    </div>
                )
            }
        } else if (interruptor) {
            return (
                <footer className='pergunta-fechada' key={ind}>
                    <p>Pergunta {ind + 1}</p>
                    <img src={obj.Bott} alt="" onClick={() => {
                        setPerguntasClicadas([...PerguntasClicadas, ind])
                        setInterruptor(false)
                    }
                    } />
                </footer>
            )
        } else {
            return (
                <footer className='pergunta-fechada' key={ind}>
                    <p>Pergunta {ind + 1}</p>
                    <img src={obj.Bott} alt="" />
                </footer>
            )
        }
    }
    









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

                <LogoContainer>
                    <img src={logo} alt="" />
                    <h1>ZapRecall</h1>
                </LogoContainer>

                {listaPerguntas.map((o, i) => RenderizarPerguntas(o, i))}


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

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;
    img {
        width: 52px;
    }
    
    h1 {
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
        margin-left: 20px;
    }
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