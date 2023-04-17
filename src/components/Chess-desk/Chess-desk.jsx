import './Chess-desk.css'
import { ChessLine } from "./Chess-line"
const ChessDesk = () => {
    return ( <div className="main-chess">
                <ChessLine/>
                <ChessLine/>
                <ChessLine/>
                <ChessLine/>
            </div>
    )
}
export {ChessDesk}