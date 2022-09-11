import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Login from "./user/Login";
import Signup from "./user/Signup";

const Background = styled.div`
    background-color: #8C11BE;
    min-height: 100vh;
    min-width: 100vw;

`

export default function App() {

    return (
        <Background>
            <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                    </Routes>
            </BrowserRouter>
        </Background>
    )
}