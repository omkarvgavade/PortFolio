import React from "react";
import { InnerLayout } from "../Styles/layouts";
import styled from "styled-components";
import Title from "./Title";
import QualificationCard from "./QualificationCard";
import dbatuLogo from "../Images/dbatuLogo.png";
import mernstack from "../Images/mernstack.png";
import vck from "../Images/vck.png";
function QualificationsSections() {
  return (
    <InnerLayout>
      <QualificationsSectionStyled>
        <Title title={"Qualifications"} span={"qualifications"} />
        <div className="qualifications">
          <QualificationCard
            img={mernstack}
            title={"Full Stack Web Development"}
            institute={"Masai School"}
            span={"Maarch 2021 - October 2021 | Remote"}
          />
          <QualificationCard
            img={dbatuLogo}
            title={"B.tech in Mechanical Engineering"}
            institute={"Dr. Babasaheb Ambedkar Technological University"}
            span={"August 2017 - August 2021"}
          />
          <QualificationCard
            img={vck}
            title={"Higher Secondary School"}
            institute={"Vivekanand Collage,Kolhapur"}
            span={"June 2015 - May 2017"}
          />
        </div>
      </QualificationsSectionStyled>
    </InnerLayout>
  );
}
const QualificationsSectionStyled = styled.section`
  .qualifications {
    display: flex;
    width: 57rem;
    margin-top: 5rem;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      & > div {
        margin: 1rem;
      }
    }
    & > div {
      width: 16rem;
      img {
        position: relative;
        left: 25%;
      }
    }

    & > div:nth-child(1) {
      img {
        width: 10rem;
        position: relative;
        left: 13%;
      }
    }
  }
`;
export default QualificationsSections;
