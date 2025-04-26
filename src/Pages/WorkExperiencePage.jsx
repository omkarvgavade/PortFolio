// pages/WorkExperiencePage.jsx
import React from "react";
import styled from "styled-components";
import WorkExperienceSection from "../Components/WorkExperienceSectioin";
import Title from "../Components/Title";

function WorkExperiencePage() {
  return (
    <WorkExperienceStyled>
      <Title title={"Work Experience"} span={"Work Experience"} />

      <WorkExperienceSection
        title="SDE-II FrontEnd, Hopstack"
        date="04/2024 – Present"
        location="Bengaluru, India"
        points={[
          "Led Frontend Development: Managed UI for Hopstack’s core platform, optimizing warehouse workflows. Built advanced filtering and streamlined purchase order flows, cutting processing time by 35%.",
          "Improved Component Management: Introduced Storybook, standardizing UI components and reducing development time by 20%.",
          "Optimized Performance: Reduced page load times by 40% via API optimizations and lazyloading. Built a high-performing rate shopping page, boosting user satisfaction by 25%.",
          "Cross-Platform Contributions: Delivered frontend solutions for both Hopstack’s main platform and Ignite (FBA customers), ensuring seamless user experiences.",
        ]}
      />

      <WorkExperienceSection
        title="SDE-I FrontEnd, Junglee Games"
        date="11/2021 – 04/2024"
        location="Bengaluru, India"
        points={[
          "Optimized Payment Flow: Implemented one-click Paytm checkout with RBI-compliant tokenization, enhancing transaction speed and security.",
          "Led Admin Panel Development: Built and managed Mini Games & Rumble Admin Panels using React and Redux, streamlining game and feature management.",
          "Unified Management System: Developed a centralized workflow solution with Vue.js and Quasar, improving operations across Junglee Rummy and Howzat.",
          "Enhanced Deposit Service: Fixed critical bugs and added key features, ensuring seamless transactions and on-time feature delivery.",
        ]}
      />
    </WorkExperienceStyled>
  );
}

const WorkExperienceStyled = styled.section`
  padding: 3rem 5rem;
  background-color: var(--background-dark-color);
  min-height: 100vh;

  h1 {
    font-size: 3rem;
    color: var(--white-color);
    margin-bottom: 3rem;
    span {
      color: var(--primary-color);
    }
  }

  @media screen and (max-width: 768px) {
    padding: 2rem;
  }
`;

export default WorkExperiencePage;
