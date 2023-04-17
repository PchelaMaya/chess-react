import React, { useState } from 'react'
import { Button } from '../Button/Button'
import { Registration } from '../Registration/Registration'
import './Header.css'
const Header = () => {
  const [registrationActive, setRegistrationActive] = useState(false);

    return (
      <div>
        <div className="header w-inner">
          <a className="header-logo" href="/">
              <img src="../src/images/logo.svg"></img>
          </a>
          <div className='header-in'>
              <p className="header-text">Вступайте в клуб</p>
              <div className='header-arrow'><div></div></div>
              <Button onClick={() => setRegistrationActive(true)} />
          </div>
        </div>
        {registrationActive && <Registration setActive={setRegistrationActive}/>}
      </div>

    )
  }
  
  export {Header}