import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Article from "./pages/Article/Article";

function App() {

  return (
    <>
    <div className="app-container">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:documentId" element={<Article />} />
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
