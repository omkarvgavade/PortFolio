import React from 'react'
import styled from 'styled-components'
function SkillsLogo({ img, title }) {
    return (
        <SkillsLogoStyled>
            <img src={img} alt="" />
            <div>{title}</div>
        </SkillsLogoStyled>
    )
}
const SkillsLogoStyled = styled.div`
width: 5rem;
height: 5rem;
padding: .5rem;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
border-radius:1rem;
background-color:var(--background-light-color);

border-left: 1px solid var(--border-color);
border-top:8px solid var(--border-color);
border-right:1px solid var(--border-color);
border-bottom:1px solid var(--border-color);

&:hover{
    border-top: 8px solid var(--primary-color);
    transform: translateY(-3px);
    background-color:var(--background-light-color-2);
    div{
        color:var(--white-color)
    }
}
img{
    width: 2rem;
    margin-bottom: .6rem;
}
div{
    font-size: .8rem;
    color: var(--font-dark-color-2);
}
border: 1px solid var(--border-color);

`
export default SkillsLogo
