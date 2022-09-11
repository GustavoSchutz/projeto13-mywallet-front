import { Container, Button, ButtonText, Logo, Forms, StyledLink } from '../../styles/componets'
import { Link } from "react-router-dom";
import { useState } from 'react';


export default function Login() {
    
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const handleChangeEmail = event => { 
        setEmail(event.target.value);
    };
    const handleChangePassword = event => {
        setPassword(event.target.value);
    }

    return(
        <Container>

            <Logo>
                MyWallet
            </Logo>
            <Forms type={"email"} placeholder="E-mail" onChange={handleChangeEmail} value={email} required />
            <Forms type={"password"} placeholder='Senha' onChange={handleChangePassword} value={password} required />

            <Button>
                <ButtonText>Entrar</ButtonText>
            </Button>
            <Link to={`/signup`}>
                <StyledLink>Primeira vez? Cadastre-se!</StyledLink>
            </Link>

        </Container>

    )
   
}