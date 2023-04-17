import { Button } from '../Button/Button'
import './Header.css'
const Header = () => {
    return (
      <div className="header w-inner">
        <a className="header-logo" href="/">
            <img src="../src/images/logo.svg"></img>
        </a>
        <div className='header-in'>
            <p className="header-text">Вступайте в клуб</p>
            <div className='header-arrow'><div></div></div>
            <Button/>
        </div>
      </div>
    )
  }
  
  export {Header}