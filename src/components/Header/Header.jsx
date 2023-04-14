import './Header.css'
const Header = () => {
    return (
      <div className="header">
        <a className="header-logo" href="/">
            <img src="../src/images/logo.svg"></img>
        </a>
        <div className='header-in'>
            <p className="header-text">Вступайте в клуб</p>
            <button className="btn">Зарегистрироваться</button>
        </div>
      </div>
    )
  }
  
  export {Header}