import styles from './Main.module.css'
import { Header } from "../Header/Header"
import { ChessDesk } from '../Chess-desk/Chess-desk'

const Main = () => {
    return (
        <div className={styles.main}>
            <Header/>
            <div className={styles.wInner}>
                <div className={styles.mainContent}>
                    <div className={styles.mainLeft}>
                        <div className={styles.mainClub}>
                            <h3>Клуб</h3>
                        </div>
                        <div className={styles.mainText}>
                            <h2 className={styles.mainTextTitle}>Правильные шахматы</h2>
                            <p className={styles.mainTextDescription}>
                                Приходите к нам, играть в шахматы! Сразитесь 
                                классическом поединке, блиц состязании
                                и бою с гройсмейстером.
                            </p>
                        </div>
                        <ChessDesk/>
                    </div>
                    <div className={styles.pies}>
                        <img src='../src/images/pies.svg'></img>
                        <img src='../src/images/pies-right.svg'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
export {Main}