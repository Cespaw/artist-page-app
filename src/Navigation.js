import { Navbar } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./About";
import Home from "./Home";

function Navigation() {
    return (
        <BrowserRouter>

            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="/">Home</a>
                    </div>
                    <ul class="navbar-nav">
                        <li class="nav-item"><a class="nav-link" href="/about">About</a></li>
                    </ul>
                </div>
            </nav>

            <Routes>

                <Route path="/about" element={<About />} />
                <Route path="/" element={<Home />} />


            </Routes>

        </BrowserRouter>);
}

export default Navigation;