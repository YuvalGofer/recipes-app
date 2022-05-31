import React, { useState } from 'react'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import {
    HeroContainer,
    HeroContent,
    HeroItem,
    HeroH1,
    HeroP,
    HeroBtn
} from './HeroElements'

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toogle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <HeroContainer>
            <Navbar toogle={toogle} />
            <SideBar isOpen={isOpen} toogle={toogle} />
            <HeroContent>
                <HeroItem>
                    <HeroH1>Get ready chef..</HeroH1>
                    <HeroP>Become sous chef with recipes from all over the world </HeroP>
                    <HeroBtn>Let's start..</HeroBtn>
                </HeroItem>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;
