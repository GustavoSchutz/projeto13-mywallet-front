import { Container, Button, ButtonText, Logo, Forms, StyledLink } from '../../styles/componets'
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { postLogin } from '../../services/mywallet';


export default function Login() {

    const userBuild = {};

    const navigate = useNavigate();
    
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const handleChangeEmail = event => { 
        setEmail(event.target.value);
    };
    const handleChangePassword = event => {
        setPassword(event.target.value);
    }

    function handleClickLogin() {
        userBuild.email = email;
        userBuild.password = password;
        console.log("userBuild: ", userBuild);

        postLogin(userBuild).then((res) => {
            console.log("data:", res);
            localStorage.setItem("token", res.data);
            navigate('/home');
        }).catch((res) => {
            alert(res);
            console.log("errorData: ", res.data)
        })
    }

    return(
        <Container>

            <Logo>
                MyWallet
            </Logo>
            <Forms type={"email"} placeholder="E-mail" onChange={handleChangeEmail} value={email} required />
            <Forms type={"password"} placeholder='Senha' onChange={handleChangePassword} value={password} required />

            <Button  onClick={handleClickLogin}>
                <ButtonText>Entrar</ButtonText>
            </Button>
            <Link to={`/signup`}>
                <StyledLink>Primeira vez? Cadastre-se!</StyledLink>
            </Link>

        </Container>

    )
   
}