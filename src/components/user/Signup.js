import { Container, Button, ButtonText, Logo, Forms, StyledLink } from '../../styles/componets'
import { Link } from "react-router-dom";
import { useState } from 'react';


export default function Signup() {

    const [confirmPassword, setConfirmPassword] = useState("");

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const handleChangeCpf = event => {
        setConfirmPassword(event.target.value);
    };

    const handleChangeName = event => {
        setName(event.target.value);
    };

    const handleChangeEmail = event => {
        setEmail(event.target.value);
    };

    const handleChangePassword = event => {
        setPassword(event.target.value);
    };

    return (
        <Container>

            <Logo>
                MyWallet
            </Logo>
            <Forms type={"text"} placeholder='Nome' onChange={handleChangeName} value={name} required ></Forms>
            <Forms type={"email"} placeholder="E-mail" onChange={handleChangeEmail} value={email} required />
            <Forms type={"password"} placeholder='Senha' onChange={handleChangePassword} value={password} required />
            <Forms type={"password"} placeholder='Confirme a senha' onChange={handleChangeCpf} value={confirmPassword} required ></Forms>
            <Button>
                <ButtonText>Entrar</ButtonText>
            </Button>
            <Link to={`/`}>
                <StyledLink>Já tem uma conta? Entre agora!</StyledLink>
            </Link>

        </Container>

    )

}