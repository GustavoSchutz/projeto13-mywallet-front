


import styled from "styled-components"


export default function EmptyRegister() {


    const RegistersContainer = styled.div`
    
        background-color: white;
        border-radius: 10px;
        height: calc(100% - 31vw - 2rem);
        display: flex;
        justify-content: center;
        align-items: center;

    `
    const EmptyRegisterMessage = styled.h1`
        color: #868686;
        font-family: 'Raleway', sans-serif;
        font-size: 1.4rem;
        text-align: center;
    `

    return (

        <RegistersContainer>

            <EmptyRegisterMessage>

                Não há registros de<br></br>entrada ou saída

            </EmptyRegisterMessage>
        
        </RegistersContainer>
    )

}