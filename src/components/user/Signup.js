import { Container, Button, ButtonText, Logo, Forms, StyledLink } from '../../styles/componets'
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { postSignup } from '../../services/mywallet';



export default function Signup() {

    const navigate = useNavigate();

    const [confirmPassword, setConfirmPassword] = useState("");

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const handleChangeConfirmPassword = event => {
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

    const registerBuild = {};


    function handleClickSignUpButton() {

        if(!(password === confirmPassword)){
            alert("Senhas não batem!");
            return false;
        };

        registerBuild.email = email;
        registerBuild.name = name;
        registerBuild.password = password;

        console.log("registerBuild: ", registerBuild);

        postSignup(registerBuild).then((res) => {
            console.log("data:", res.data);
            navigate('/');
        }).catch((res) => {
            alert(res.message);
            console.log("errorData: ", res)
        })
    }

    return (
        <Container>

            <Logo>
                MyWallet
            </Logo>
            <Forms type={"text"} placeholder='Nome' onChange={handleChangeName} value={name} required ></Forms>
            <Forms type={"email"} placeholder="E-mail" onChange={handleChangeEmail} value={email} required />
            <Forms type={"password"} placeholder='Senha' onChange={handleChangePassword} value={password} required />
            <Forms type={"password"} placeholder='Confirme a senha' onChange={handleChangeConfirmPassword} value={confirmPassword} required ></Forms>
            <Button onClick={handleClickSignUpButton}>
                <ButtonText>Entrar</ButtonText>
            </Button>
            <Link to={`/`}>
                <StyledLink>Já tem uma conta? Entre agora!</StyledLink>
            </Link>

        </Container>

    )

}