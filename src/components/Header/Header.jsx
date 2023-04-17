import React, { useState } from 'react'
import { Button } from '../Button/Button'
import { Registration } from '../Registration/Registration'
import styles from'./Header.module.css'

const Header = () => {
  const [registrationActive, setRegistrationActive] = useState(false);

    return (
        <div className={styles.wInner}>
            <div className={styles.header}>
                <a className={styles.headerLogo} href="/">
                    <img src="../src/images/logo.svg"></img>
                </a>
                <div className={styles.headerIn}>
                    <p className={styles.headerText}>Вступайте в клуб</p>
                    <div className={styles.headerArrow}><div></div></div>
                    <Button onClick={() => setRegistrationActive(true)} />
                </div>
            </div>
            {registrationActive && <Registration setActive={setRegistrationActive}/>}
        </div>

    )
  }
  
  export {Header}