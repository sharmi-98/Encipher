import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
function Task10(){
    return(
        <BrowserRouter>
        <nav>
        <Link to="/home">Home</Link>|<Link to="/about">About</Link>
        </nav>
        <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
        </Routes>
        </BrowserRouter>
    );
}export default Task10;