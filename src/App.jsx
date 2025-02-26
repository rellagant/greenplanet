import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss'
import Header from './components/Header/Header'
import InfoCard from './components/InfoCard/InfoCard'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <>
    <div className="app-container">
      <NavBar />
      <Header />
      <InfoCard />
  
      {/* <h1>Hello World</h1> */}
    </div>
    </>
  )
}

export default App
