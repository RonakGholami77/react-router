import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Article from "./components/Article";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Links from "./components/Links";
import FrontEnd from "./components/FrontEnd";
import BackEnd from "./components/BackEnd";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/article/*" element={<Article />}>
          <Route path="frontend" element={<FrontEnd />} />
          <Route path="backend" element={<BackEnd />} />
        </Route>
        <Route path="/link/:idAction" element={<Links />} />
        <Route path="/main" element={<Main />} />
        <Route path="*" element={<h1>not found!!</h1>} />
      </Routes>
    </div>
  );
}

export default App;
