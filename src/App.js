import "./App.css";
import Home from "./component/Home";
import About from "./component/About";
import Skills from "./component/Skills";
import Experiene from "./component/EducationAndExperience";
import Projects from "./component/Projects";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import ScrollToTopButton from "./component/ScrroolToTopI";
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Skills" element={<Skills />}></Route>
            <Route path="/Experiene" element={<Experiene />}></Route>
            <Route path="/Projects" element={<Projects />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
      <div id="section-2">
        <ScrollToTopButton />
      </div>
    </>
  );
}

export default App;
