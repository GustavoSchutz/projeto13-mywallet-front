import { Align, NavUser } from "../../styles/componets";
import logoffIcon from "../../assets/images/exit-icon.svg";
import styled from "styled-components";
import Registers from "./Registers";
import EmptyRegister from "./EmptyRegister";
import incomeIcon from "../../assets/images/register-income-icon.svg";
import billIcon from "../../assets/images/register-bill-icon.svg";

export default function Home() {

    const HomeTittle = styled.h1`
        color: white;
        font-family: 'Raleway', sans-serif;
        font-size: 1.6rem;
        font-weight: 700;
    `

    const AlignButtons = styled.div`
        display: flex;
        justify-content: space-between;
    `

    const NewRegisterButton = styled.div`
        width: 41vw;
        height: 31vw;
        margin-top: 1rem;
        background-color: #A328D6;
        border-radius: 5px;
        box-sizing: border-box;
        padding: .8rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
    `
    const NewRegisterButtonText = styled.div`
        color: white;
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        font-size: 1.1rem;
    `
    const NewRegisterButtonIcon = styled.img`

        max-width: 25px;
    
    `

    return (

        <Align>
            <NavUser>
                <HomeTittle>Olá, Fulano</HomeTittle>
                <div><img alt="logOut" src={logoffIcon} /></div>
            </NavUser>
            <EmptyRegister>

            </EmptyRegister>
            <AlignButtons>
                <NewRegisterButton>
                    <NewRegisterButtonIcon alt="" src={incomeIcon} />
                    <NewRegisterButtonText>
                        Nova<br></br> entrada
                    </NewRegisterButtonText>
                </NewRegisterButton>
                <NewRegisterButton>

                    <NewRegisterButtonIcon alt="" src={billIcon} />
                    <NewRegisterButtonText>
                        Nova<br></br> entrada
                    </NewRegisterButtonText>

                </NewRegisterButton>
            </AlignButtons>

        </Align>
    )
}