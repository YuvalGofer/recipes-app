import styled from 'styled-components'
import imgBg from '../../images/Confiture.jpg'

export const HeroContainer = styled.div`
background:linear-gradient(to right, rgba(0,0,0,0.4),
rgba(0,0,0,0)),
 url(${imgBg});
height: 100vh;
background-position:center;
background-size: cover;
`;

export const HeroContent = styled.div`
height: calc(100vh-80px);
max-height: 100%;
width: 100vw;
padding: 0rem calc((100vw-1300px)/2);
`
export const HeroItem = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
height: 100vh;
max-height: 100%;
padding: 0 2rem;
width: 650px;
color: #fff;
text-transform: none;
font-weight: 150;

@media screen and(max-width:650px) {
    width: 100%;
}
`
export const HeroH1 = styled.h1`
font-size: clamp(3.5rem, 8vw,5rem);
font-weight: 150;
margin-bottom: 1rem;
box-shadow: 1.5px 0.5px #fff;
letter-spacing: 3px;
`
export const HeroP = styled.p`
font-size: clamp(1rem, 2.5vw,3rem);
margin-bottom: 2rem;
`
export const HeroBtn = styled.button`
margin-top: 0.5rem;
font-size: 1.4rem;
padding: 1rem 4rem;
border-radius: 5.5px;
border: none;
background: rgba(1,1,1,0.3);
color: #fff;
transition: 0.2s ease-out;
&:hover{
    background: #ffc500;
    transition: 0.2s ease-out;
cursor: pointer;
color: #000;
}
`