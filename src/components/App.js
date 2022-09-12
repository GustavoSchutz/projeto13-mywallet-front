import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./home/Home";
import PostIncome from "./posts/PostIncome";
import PostBill from "./posts/PostBill";
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
                        <Route path="/home" element={<Home />} />
                        <Route path="/postincome" element={<PostIncome />} />
                        <Route path="/postbill" element={<PostBill />} />
                    </Routes>
            </BrowserRouter>
        </Background>
    )
}