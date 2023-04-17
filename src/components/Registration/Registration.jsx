import './Registration.css'
import React from 'react'
import { Button } from '../Button/Button'
const Registration = ({setActive}) => {
    return (
        <div className={'form-registration active'} 
        onClick={() => setActive(false)}>
           <div className='form-registration__content' onClick={e => e.stopPropagation()}>
                <img className='registration-logo' src="../src/images/logo.svg"></img>
                <h3 className='registration-title'>Регистрация</h3>
                <form>
                    <div className='registration-input'>
                        <input className='registration-input__name' type='text' placeholder='Имя' ></input>
                        <input className='registration-input__email' type='email' placeholder='Email'></input>
                    </div>
                    <Button/>
                </form>
           </div>
        </div>
    )
}
export {Registration}