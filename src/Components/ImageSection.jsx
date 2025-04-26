import React from "react";
import styled from "styled-components";
import myResume from "../Images/myResume.jpg";
import PrimaryButton from "./PrimaryButton";
import omkargavaderesume from "../Data/Resume/omkargavaderesume.pdf";

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
          Frontend Engineer with 3+ years of experience building scalable web
          applications using React, Vue.js, and MERN stack. Led cross-functional
          teams to deliver high-impact features like one-click payment flows and
          optimized UIs. Passionate about mentoring junior developers and
          advocating for best practices in component-driven design.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Current Location</p>
            <p>Native</p>
            <p>Work</p>
          </div>
          <div className="info">
            <p>: Omkar Gavade</p>
            <p>: 25</p>
            <p>: Indian</p>
            <p>: English, Hindi, Marathi</p>
            <p>: Bengaluru, Karnataka</p>
            <p>: Kolhapur, Maharashtra</p>
            <p>: Frontend Developer</p>
          </div>
        </div>

        <PrimaryButton title={"Download Resume"} href={omkargavaderesume} />
      </div>
    </ImageSectionStyled>
  );
}
const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 100%;
    img {
      width: 95%;
      object-fit: cover;
      box-shadow: 1px 1px 8px black;
    }
  }
  .right-content {
    width: 100%;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;
export default ImageSection;
