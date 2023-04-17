import './Button.css'
const Button = ({onClick}) => {
    return (
        <button type="submit" className="btn" onClick={onClick}>Зарегистрироваться</button>
    )
}
export {Button}