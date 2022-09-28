import ReactDOM from 'react-dom';
// import App from './components/App';

import './assets/css/reset.css';
import './assets/css/style.css';

import logo from './assets/img/logo.png'
import setaPlay from './assets/img/seta_play.png'
import setarVirar from"./assets/img/seta_virar.png"

function App() {
    return (
        <>
            <div className='screen-container'>

                <div className='logo-container'>
                    <img src={logo} alt="" />
                    <h1>ZapRecall</h1>
                </div>

                <footer className='pergunta-fechada '>
                    <p>Esse é um p</p>
                    <img src ={setaPlay} alt=""/>
                </footer>



                <div className='pergunta-aberta '>
                    O que é tal coisa?
                    <img src ={setarVirar} alt=''/>
                </div>



                <footer className='footer-concluidos'>
                    <div className='container-botoes'>
                        <button>Não lembrei</button>
                        <button>Quase não lembrei</button>
                        <button>Zap!</button>
                    </div>
                    0/4 concluídos
                </footer>
            </div>

        </>
    )
}

ReactDOM.render(<App />, document.querySelector('.root'));
