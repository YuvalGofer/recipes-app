import React from 'react'
import Navbar from '../Navbar'
import { HeroContainer, HeroContent, HeroItem, HeroH1, HeroP, HeroBtn } from './HeroElements'

const Hero = () => {
    return (
        <HeroContainer>
            <Navbar />
            <HeroContent>
                <HeroItem>
                    <HeroH1>Get ready chef..
                        <HeroP>Become sous chef of your own house
                            with recipes from all over the world
                            <HeroBtn>Let's start..</HeroBtn>
                        </HeroP>
                    </HeroH1>
                </HeroItem>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;
