// components/WorkExperienceSection.jsx
import React from "react";
import styled from "styled-components";

function WorkExperienceSection({ title, date, location, points }) {
  return (
    <ExperienceStyled>
      <h3>{title}</h3>
      <span className="date-location">
        {date} | {location}
      </span>
      <ul>
        {points.map((point, index) => (
          <li key={index}>• {point}</li>
        ))}
      </ul>
    </ExperienceStyled>
  );
}

const ExperienceStyled = styled.div`
  margin-top: 5rem;
  background-color: var(--background-dark-gray);
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;

  h3 {
    font-size: 2rem;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
  }

  .date-location {
    display: block;
    font-size: 1rem;
    color: var(--font-light-color);
    margin-bottom: 1.5rem;
  }

  ul {
    list-style: none;
    padding-left: 0;

    li {
      font-size: 1.1rem;
      color: var(--font-light-color);
      margin-bottom: 0.8rem;
      line-height: 1.5;
    }
  }
`;

export default WorkExperienceSection;
