import React from "react";
import styled from "styled-components";
import SkillsLogo from "./SkillsLogo";
import { InnerLayout } from "../Styles/layouts";

import css from "../Images/css.png";
import expressjs from "../Images/expressjs.png";
import firebase2 from "../Images/firebase2.png";
import html5 from "../Images/html5.png";
import JS from "../Images/JS.png";
import materialui from "../Images/materialui.png";
import mongodb from "../Images/mongodb.png";
import nodejs from "../Images/nodejs.png";
import react from "../Images/react.png";
import redux from "../Images/redux.png";
import git from "../Images/git.png"; // add images
import github from "../Images/github.png";
import postman from "../Images/postman.png";
import storybook from "../Images/storybook.png";
import jira from "../Images/Jira.webp";
import vuejs from "../Images/vuejs.png";
import jquery from "../Images/jquery.png";
import typescript from "../Images/typescript.png";
import bitbucket from "../Images/bitbucket.png";

function SkillsSection() {
  return (
    <InnerLayout>
      <SkillsSectionStyled>
        <div className="skills-category">
          <h4>Frontend</h4>
          <div className="skills-grid">
            <SkillsLogo img={JS} title={"JavaScript"} />
            <SkillsLogo img={html5} title={"HTML5"} />
            <SkillsLogo img={css} title={"CSS3"} />
            <SkillsLogo img={react} title={"React"} />
            <SkillsLogo img={redux} title={"Redux"} />
            <SkillsLogo img={vuejs} title="VueJs" />
            <SkillsLogo img={materialui} title={"Material UI"} />
            <SkillsLogo img={storybook} title={"Storybook"} />
            <SkillsLogo img={jquery} title={"JQuery"} />
            <SkillsLogo img={typescript} title={"TypeScript"} />
          </div>
        </div>

        <div className="skills-category">
          <h4>Backend</h4>
          <div className="skills-grid">
            <SkillsLogo img={nodejs} title={"Node.js"} />
            <SkillsLogo img={expressjs} title={"Express.js"} />
            <SkillsLogo img={mongodb} title={"MongoDB"} />
            <SkillsLogo img={firebase2} title={"Firebase"} />
          </div>
        </div>

        <div className="skills-category">
          <h4>Other Tools</h4>
          <div className="skills-grid">
            <SkillsLogo img={git} title={"Git"} />
            <SkillsLogo img={github} title={"GitHub"} />
            <SkillsLogo img={postman} title={"Postman"} />
            <SkillsLogo img={jira} title={"Jira"} />
            <SkillsLogo img={bitbucket} title={"BitBucket"} />
          </div>
        </div>
      </SkillsSectionStyled>
    </InnerLayout>
  );
}

const SkillsSectionStyled = styled.div`
  padding: 2rem 0;

  .section-title {
    font-size: 2.5rem;
    color: var(--white-color);
    text-align: center;
    margin-bottom: 3rem;

    span {
      color: var(--primary-color);
    }
  }

  .skills-category {
    margin-bottom: 3rem;

    h4 {
      font-size: 1.8rem;
      color: var(--primary-color);
      margin-bottom: 1.5rem;
      text-align: center;
    }
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    gap: 2rem;
    justify-items: center;
  }

  @media screen and (max-width: 768px) {
    .skills-grid {
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    }
  }
`;

export default SkillsSection;
