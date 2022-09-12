import { useState } from "react";
import styled from "styled-components";
import { Button, ButtonText, Forms } from "../../styles/componets";


export default function PostIncome() {
    


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

    const [value, setValue] = useState("");

    const [description, setDescription] = useState("");


    const handleChangeValue = event => {
        setValue(event.target.value);
    };

    const handleChangeDescription = event => {
        setDescription(event.target.value);
    };

    return (
        <AlignPost>
            <AlignTitle>
                <Title>
                    Nova entrada
                </Title>
            </AlignTitle>
            <Forms type={"text"} placeholder='Valor' onChange={handleChangeValue} value={value}  />
            <Forms type={"text"} placeholder="Descrição" onChange={handleChangeDescription} value={description} />
            <Button>
                <ButtonText>
                    Salvar entrada
                </ButtonText>
            </Button>
        </AlignPost>
    )
}