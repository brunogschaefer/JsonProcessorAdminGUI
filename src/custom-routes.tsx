import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./pages/home/home";

function CustomRoutes () {
    return (
        <BrowserRouter >
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />

            </Routes>
        
        </BrowserRouter>



    )
}

export default CustomRoutes;