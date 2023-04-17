import styles from './Chess-desk.module.css'
import { ChessLine } from "./Chess-line"
const ChessDesk = () => {
    return ( <div className={styles.mainChess}>
                <ChessLine/>
                <ChessLine/>
                <ChessLine/>
                <ChessLine/>
            </div>
    )
}
export {ChessDesk}