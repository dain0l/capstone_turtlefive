import styled from 'styled-components';
import { Link } from 'react-router-dom';
import imglogo2 from '../img/ground.jpg';


const BackStyle = styled.div`
    display: flex;
    background-image: url(${imglogo2});
    //background-color: #000000;
    //background-image: linear-gradient(to left, #ccffaa, #779787, #1e5b53);
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    opacity: 0.8; /* 불투명도 조절 */
`;


const TitleStyle = styled.div`
    color: #FBFDF5;
    font-family: Roboto;
    font-size: 4rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

const LinkButtonStyle = styled(Link)`
    color: #FBFDF5;
    font-family: Roboto;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    margin-top: 1rem;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        color: #FFFFFF;
        text-decoration: none; // Ensure no underline on hover
    }
`;

function StartPage() {
    return (
        <BackStyle>
            <TitleStyle>TurtleFIve</TitleStyle>  
            <LinkButtonStyle to="/register">START</LinkButtonStyle>
        </BackStyle>
    );
}

export default StartPage;
