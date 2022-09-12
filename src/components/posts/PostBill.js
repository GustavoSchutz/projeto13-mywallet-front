import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { postBill } from "../../services/mywallet";
import { Button, ButtonText, Forms } from "../../styles/componets";

const Title = styled.h1`
color: white;
font-family: 'Raleway', sans-serif;
font-size: 1.5rem; 
font-weight: 700;

`
const AlignPost = styled.div`
display: flex;
margin: 0rem 1.5rem;
padding: 1.5rem 0;
width: calc(100vw - 3rem);
height: calc(100vh - 3rem);
flex-direction: column;
align-items: center;
`
const AlignTitle = styled.div`
width:95%;
margin-bottom: 2rem;

`

export default function PostBill() {

    const navigate = useNavigate();
    
    const token = localStorage.getItem("token");

    const registerBuild = {};

    const [value, setValue] = useState("");

    const [description, setDescription] = useState("");


    const handleChangeValue = event => {
        setValue(event.target.value);
    };

    const handleChangeDescription = event => {
        setDescription(event.target.value);
    };

    function handleClickPostBillButton() {

        registerBuild.value = value;
        registerBuild.description = description;

        console.log("registerBuild: ", registerBuild);

        postBill(registerBuild, token).then((res) => {
            console.log("data:", res.data);
            navigate('/home');
        }).catch((res) => {
            alert(res.message);
            console.log("errorData: ", res)
        });
    }

    
    return (
        <AlignPost>
            <AlignTitle>
                <Title>
                    Nova saída
                </Title>
            </AlignTitle>
            <Forms type={"text"} placeholder='Valor' onChange={handleChangeValue} value={value} required  />
            <Forms type={"text"} placeholder="Descrição" onChange={handleChangeDescription} value={description} required />
            <Button onClick={handleClickPostBillButton}>
                <ButtonText>
                    Salvar saída
                </ButtonText>
            </Button>
        </AlignPost>
    )
}