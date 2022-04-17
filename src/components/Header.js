import {StyledHeader, Nav, Image, Logo} from './styles/Header.styled';
import {Button} from './styles/Button.styled';
import { Container } from './styles/Container.styled';
import {Flex} from './styles/Flex.styled';

export default function Header() {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo>Besplatni API</Logo>
                    <Button>Počnite ODMAH!</Button>
                </Nav>
                <Flex>
                    <div>
                        <h3>API INTEGRACIJA</h3>
                        <h1>Besplatni API Resursi, <em>Vrlo Jednostavno!</em></h1>
                        <Button bg="transparent" color="#fff">Počnite odmah. Besplatno!</Button>
                    </div>
                    <div>
                        <Image src="./images/api.png" />
                    </div>
                </Flex>
            </Container>
        </StyledHeader>
    )
}