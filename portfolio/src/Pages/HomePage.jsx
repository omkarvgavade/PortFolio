import React from 'react'
import styled from 'styled-components'
import Particles from 'react-particles-js'
import { Particle } from '../Components/Particle'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
function HomePage() {
    return (
        <HomePageStyled>
            <div className="p-particles-js">
                <Particle />
            </div>
            <div className="typography">
                <h1>HI I'm <span>Omkar Gavade</span></h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium eius eaque modi voluptatum consectetur quas distinctio soluta! Dolores, ad rerum!</p>
                <div className="icons">
                    <div className="icon i-linkedin">
                        <LinkedInIcon />
                    </div>
                    <div className="icon i-github">
                        <GitHubIcon />
                    </div>
                    <div className="icon i-facebook">
                        <FacebookIcon />
                    </div>
                    <div className="icon i-twitter">
                        <TwitterIcon />
                    </div>
                </div>
            </div>
        </HomePageStyled>
    )
}
const HomePageStyled = styled.header`
width: 100%;
height: 100vh;
position: relative;

.p-particles-js{
    position:absolute;
    top: 0;
    left:0;
}
.typography{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    width: 80%;
    .icons{
        display: flex;
        justify-content: center;
        margin-top: 1rem;
.icon{
    border: 2px solid var(--border-color);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius:50%;
    svg{
       marker: .5rem;
    }
}
    }
}

`

export default HomePage
