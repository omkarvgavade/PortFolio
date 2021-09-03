import React from "react";
import styled from "styled-components";
import resume from "../Images/dummyResume.png";
import PrimaryButton from "./PrimaryButton";
function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt="resumeimage" />
            </div>
            <div className="right-content">

                <h4>
                    I am <span>Omkar Gavade</span>
                </h4>

                <p className="paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nisi fugit
                    soluta tempore corrupti quia esse, ducimus error nam saepe porro
                    consequatur blanditiis corporis optio magni perferendis. Ex facere
                    obcaecati modi quaerat
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

                        <p>: Full Stack Web Development</p>
                    </div>
                </div>
                <PrimaryButton title={"Download Resume"} />
            </div>
        </ImageSectionStyled>
    );
}
const ImageSectionStyled = styled.div`
margin-top:5rem;
display:flex;
@media screen and (max-width:1000px){
flex-direction: column;
.left-content{
    margin-bottom: 2rem;
}
}
.left-content{
width: 100%;

    img{
        width: 90%;

        object-fit: cover;
    }
}
.right-content{
   
    h4{
        font-size: 2rem;
        color: var(--white-color);
        span{
                font-size: 2rem;

        }
    }
    .paragraph{
        padding: 1rem 0rem;

    }
    .about-info{
         padding-bottom: 1.4rem;
        display:flex;
        .info-title{
            padding-right: 3rem;
            p{
                font-weight: 600;
            }
        }
        .info-title,.info{
            p{
        padding:.3rem 0;
            }
         
        }
    }
}
`;
export default ImageSection;
