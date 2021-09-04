import React from "react";
import styled from "styled-components";
import myResume from "../Images/myResume.jpg";
import PrimaryButton from "./PrimaryButton";
import omkargavaderesume from '../Data/Resume/omkargavaderesume.pdf'

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={myResume} alt="resumeimage" />
            </div>
            <div className="right-content">

                <h4>
                    I am <span>Omkar Gavade</span>
                </h4>

                <p className="paragraph">
                    Dedicated and motivational aspiring full stack web developer, proficient in MERN stack. Collaborative team player ,eager to work with interdisciplinary teams for organizational growth, with the passion for creating new products. Looking forward to start the journey in product based company.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>

                        <p>Location</p>

                        <p>Work</p>
                    </div>
                    <div className="info">
                        <p>: Omkar Gavade</p>
                        <p>: 22</p>
                        <p>: Indian</p>
                        <p>: English, Hindi, Marathi</p>

                        <p>: Kolhapur, Maharashtra</p>

                        <p>: Full Stack Web Developer</p>
                    </div>
                </div>


                <PrimaryButton title={'Download Resume'} href={omkargavaderesume} />

            </div>
        </ImageSectionStyled>
    );
}
const ImageSectionStyled = styled.div`
 margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
               box-shadow: 1px 1px 8px black;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
