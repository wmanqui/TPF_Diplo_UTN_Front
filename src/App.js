import { BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import UsPage from "./pages/UsPage";
import NovedadesPage from "./pages/NovedadesPage";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Nav/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/us" element={<UsPage/>}/>
            <Route path="/novedades" element={<NovedadesPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
      </BrowserRouter>
      
      <Footer/>

    </div>
  );
}

export default App;
