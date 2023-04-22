import Card from "./Card/Card.jsx";
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Card name_1="Андрей"
          about_1="Шахматист, писатель."
          name_2="Никита"
          about_2="Шахматист, кулинар."
          name_3="Алексей"
          about_3="Шахматист, геймер." />
          
      </div>
      <Footer/>
    </div>
  )

}

export default App
