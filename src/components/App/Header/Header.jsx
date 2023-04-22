
const Header = () => {
    const h1Style = {
        fontFamily: 'Noto Sans,sans-serif', fontSize: '70px', fontWeight: '600px', lineHeight: '63px',
        color: '#FFFFFF', marginTop: '80 px', textAlign: 'left', letterspacing: '0em'
    }
    const p1style = {
        fontFamily: 'Noto Sans,sans-serif', fontSize: '20px', fontWeight: '400px', lineHeight: '26px',
        color: '#FFFFFF', marginTop: '40px', textAlign: 'left', letterspacing: '0em', width: '600px'
    }
    return (
        <div className="header">
            <h1 style={h1Style}>Наша команда</h1>
            <p style={p1style}>Лучшие шахматисты и шахматистки любители России, гройсмейстеры,
                с ними играть — одно удовольствие!</p>

        </div>

    )

}

export default Header