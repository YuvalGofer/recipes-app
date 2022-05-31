import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components'
import { GiChefToque } from 'react-icons/gi'

export const Nav = styled.nav`
justify-content: space-between;
align-items: center;
background-color: rgba(0, 0, 0, 0.1);
height: 80px;
display:flex;
justify-content: left;
font-weight:150
`

export const NavLink = styled(Link)`
color: white;
padding: 2rem;
font-size:3rem;
display:flex;
text-decoration:none;
cursor:pointer;
@media screen and(max-width:400px){
    position:absolute;
    top:10px;
    left:25px;
}
`

export const NavIcon = styled.div`
display: block;
position: absolute;
top: 0;
right: 0;
/* margin-top: 0rem;
margin-left: 8rem; */
cursor:pointer;
color: #fff;
p{
    transform: translate(-175%, 100%);
    font-weight:150;
    font-size: 1.5rem;
}
`
export const Bar = styled(GiChefToque)`
font-size:3rem;
transform:translate(-15%, 35%);
margin-top:0rem;
`









