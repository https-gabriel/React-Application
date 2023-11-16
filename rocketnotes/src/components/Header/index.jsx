import {RiShutDownLine} from 'react-icons/ri';
import { Container, Profile, Logout } from './styles'

export function Header() {
    return(
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/SoftEngineerGabriel.png" 
                 alt="Foto user"
                />

                <div>
                    <span>Bem vindo,</span>
                    <strong>Gabriel Farias</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}