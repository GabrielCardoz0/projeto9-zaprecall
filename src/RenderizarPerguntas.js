import React from "react"
import setarVirar from "./assets/img/seta_virar.png"


export default function RenderizarPerguntas(props) {
    const { obj, ind, interruptor, setInterruptor, PerguntasRespondidas,setControle, setAtivarZap} = props
    const [PerguntasAbertas, setPerguntasAbertas] = React.useState([])
    const [PerguntasClicadas, setPerguntasClicadas] = React.useState([])

    if (PerguntasRespondidas.includes(ind)) {
        return (
            <footer className='pergunta-fechada' key={ind}>
                <p>Pergunta {ind + 1}</p>
                <img src={obj.Bott} alt="" />
            </footer>
        )
    } else if (PerguntasClicadas.includes(ind)) {
        if (PerguntasAbertas.includes(ind)) {
            return (
                <div className='pergunta-aberta' key={ind}>
                    {obj.R}
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
