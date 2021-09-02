import React from 'react'
import styled from 'styled-components'

function QualificationCard({ img, title, institute, span }) {
    return (
        <QualificationCardStyled>
            <div className="container">
                <img src={img} alt="" />
                <h4>{title}</h4>
                <p>{institute}</p>
                <p>{span}</p>
            </div>
        </QualificationCardStyled>
    )
}
const QualificationCardStyled = styled.div`
border-left: 1px solid var(--border-color);
border-top:8px solid var(--border-color);
border-right:1px solid var(--border-color);
border-bottom:1px solid var(--border-color);

background-color:var( --background-dark-gray);
margin: 0 1rem;
transition : all .4s ease-in-out;
&:hover{
    border-top: 8px solid var(--primary-color);
    transform: translateY(-3px);
}
.container{
    padding: 1.2rem;
    display: grid;
    grid-template-rows: 2fr 1fr 1fr 1fr;
    grid-gap: 0.5rem;
    height: 17rem;
    img{
        width: 7rem;
    }
    h4{
        font-size:0.9rem;
        text-align:center;
        margin-bottom:1rem;
            color: var(--white-color);
      
    }
    p:nth-child(3){
            font-size: 1rem;
    text-align: center;

    }
    p:nth-child(4){
     font-size: 0.8rem;
     text-align: center;
    }
}

`

export default QualificationCard
