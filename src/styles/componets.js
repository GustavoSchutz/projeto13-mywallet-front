import styled from 'styled-components'

const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 25vh;

`

const Logo = styled.div`
    ${'' /* margin-top: 25vh; */}
    margin-bottom: 5vh;
    font-size: 2rem;
    color: white;
    font-family: 'Saira Stencil One', cursive;
    
`

const Forms = styled.input`
    height: 3rem;
    width: 83vw;
    border: 0px;
    border-radius: 5px;
    margin-bottom: .8rem;
    text-indent: .6rem;
    font-size: .9rem;
    box-sizing: border-box;
`

const HalfForms = styled.input`
    height: 3rem;
    width: 40vw;
    border: 0px;
    border-radius: 5px;
    margin-bottom: .8rem;
    text-indent: .6rem;
    font-size: .9rem;
    box-sizing: border-box;
`

const Button = styled.div`
    background-color: #A328D6;
    width: 83vw;
    height: 3rem;
    border-radius: 5px;
    margin-bottom: 2rem;
    margin-top: .4rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ButtonText = styled.p`

    color: white;
    font-size: 1.3rem;
    font-weight: 700;
    font-family: 'Raleway', sans-serif;


`

const StyledLink = styled.p`
    color: white;
    font-family: 'Raleway', sans-serif;
    font-size: .9rem;
    font-weight: 700;

`
export { Container, Button, ButtonText, Logo, Forms, StyledLink, HalfForms }