import './Main.css'
import { Header } from "../Header/Header"
import { ChessDesk } from '../Chess-desk/Chess-desk'

const Main = () => {
    return (
        <div className="main">
            <div className="main-content w-inner">
                <Header/>
                <div className='main-club'>
                    <h3>Клуб</h3>
                </div>
                <div className='main-text'>
                    <h2 className='main-text__title'>Правильные шахматы</h2>
                    <p className='main-text__description'>
                        Приходите к нам, играть в шахматы! Сразитесь 
                        классическом поединке, блиц состязании
                        и бою с гройсмейстером.
                    </p>
                </div>
                <ChessDesk/>

            </div>
        </div>

    )
}
export {Main}