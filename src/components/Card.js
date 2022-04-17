import {StyledCard, CardContent, CardButton, Align} from './styles/Card.styled';
import {BsFacebook, BsLinkedin, BsGoogle, BsWordpress, BsYoutube, BsSpotify} from 'react-icons/bs';

let iconArr = [<BsFacebook />, <BsLinkedin />, <BsGoogle />, <BsWordpress />, <BsYoutube />, <BsSpotify />];

export default function Card({id, title, text, link}) {
    return (
        <StyledCard>  
                <CardContent>
                    <Align>
                        <span className='icon'>{ iconArr[id - 1] }</span> 
                        <span>{title}</span>
                    </Align>
                    <p>{text}</p>
                </CardContent>
                <CardButton href={link} target="_blank">
                    Pretražite API
                </CardButton>
        </StyledCard>
    )
}