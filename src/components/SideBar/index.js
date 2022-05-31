import React from 'react'
import {
    SideBarContainer,
    Icon,
    CloseIcon,
    SideBarMenu,
    SideBarLink,
    SideBarBtnWrap,
    SideBarRoute
} from './SidebarElements';

const SideBar = ({ isOpen, toogle }) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toogle}>
            <Icon >
                <CloseIcon />
            </Icon>
            <SideBarMenu>
                <SideBarLink to="/">Recipes</SideBarLink>
                <SideBarLink to="/">Products</SideBarLink>
                <SideBarLink to="/">Home</SideBarLink>
            </SideBarMenu>
            <SideBarBtnWrap>
                <SideBarRoute to="/">Order now</SideBarRoute>
            </SideBarBtnWrap>
        </SideBarContainer >
    )
}

export default SideBar
