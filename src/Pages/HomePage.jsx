import React from "react";
import styled from "styled-components";
import Particles from "react-particles-js";
import { Particle } from "../Components/Particle";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import medium from "../Images/medium.png";
function HomePage() {
  return (
    <HomePageStyled>
      <div className="p-particles-js">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Hi, I'm <span>Omkar Gavade</span>
        </h1>
        <p>
          It's nice to meet you. I am an Experienced Full Stack & Frontend
          Developer Crafting Seamless Digital Experiences from Maharashtra,
          India.
        </p>
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/omkar-gavade-60ba80179"
            target="_blank"
            className="icon i-linkedin"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/omkarvgavade"
            target="_blank"
            className="icon i-github"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.facebook.com/omivpn.gawade.3/"
            target="_blank"
            className="icon i-facebook"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://twitter.com/OmkarGa52302750"
            target="_blank"
            className="icon i-twitter"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://medium.com/@omkarvgawade"
            target="_blank"
            className="icon i-medium"
          >
            <img src={medium} alt="" />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
}
const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .p-particles-js {
    position: absolute;
    top: 0;
    left: 0;
  }
  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
          transition: all 0.4s ease-in-out;
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          marker: 0.5rem;
        }
      }
      .i-twitter {
        &:hover {
          border: 2px solid blue;
          color: rgb(253, 253, 253);
        }
      }
      .i-github {
        &:hover {
          border: 2px solid purple;
          color: purple;
        }
      }
      .i-facebook {
        &:hover {
          border: 2px solid rgb(23, 117, 241);
          color: rgb(23, 117, 241);
        }
      }
      .i-linkedin {
        &:hover {
          border: 2px solid rgb(23, 117, 241);
          color: rgb(23, 117, 241);
        }
      }
      .i-medium {
        background-color: white;
        img {
          width: 1.5rem;
        }

        &:hover {
          border: 2px solid rgb(23, 117, 241);
          color: rgb(23, 117, 241);
          background-color: red;
        }
      }
    }
  }
`;

export default HomePage;
