import React from "react";
import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import WebIcon from "@material-ui/icons/Web";
import LinkIcon from "@material-ui/icons/Link";

function Menu({ menuItem }) {
  return (
    <MenuItemStyled>
      {menuItem.map((item, index) => {
        return (
          <div className="grid-item" key={index}>
            <div className="project-content">
              <div className="project-image">
                <img src={item.image} alt={item.title} />
                <ul>
                  <li>
                    <a target="_blank" rel="noreferrer" href={item.link1}>
                      <GitHubIcon />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href={item.link2}>
                      <LinkIcon />
                    </a>
                  </li>
                  {item.isBlog && (
                    <li>
                      <a target="_blank" rel="noreferrer" href={item.blogLink}>
                        <WebIcon />
                      </a>
                    </li>
                  )}
                </ul>
              </div>
              <h6>{item.title}</h6>
              <p>{item.text}</p>
            </div>
          </div>
        );
      })}
    </MenuItemStyled>
  );
}

const MenuItemStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  grid-row-gap: 3rem;

  @media screen and (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 670px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .grid-item {
    height: 24rem; /* Fixed height */
    width: 15rem;
    .project-content {
      display: flex;
      flex-direction: column;
      position: relative;
      overflow: hidden;
      padding: 1rem 7px;
      box-shadow: 1px 1px 8px black;
      background-color: var(--background-dark-gray);
      height: 100%;

      &:hover {
        transform: translateY(-10px);
        transition: all 0.4s ease-in-out;
      }

      h6 {
        font-size: 1.4rem;
        color: var(--white-color);
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap; /* Single line title */
      }

      p {
        font-size: 1rem;
        color: var(--font-light-color);

      }

      img {
        width: 100%;
        height: 150px; /* Fixed image height */
        object-fit: cover;
      }

      ul {
        transform: translateY(-600px);
        transition: all 0.4s ease-in-out;
        position: absolute;
        left: 50%;
        top: 40%;
        opacity: 0;
        li {
          background-color: var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          border-radius: 50%;
          width: 3rem;
          height: 3rem;
          margin: 0 0.5rem;
          transition: all 0.4s ease-in-out;

          &:hover {
            background-color: var(--primary-color);
          }

          a {
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.4s ease-in-out;
          }
        }
      }

      .project-image {
        position: relative;
        overflow: hidden;

        &::before {
          content: "";
          position: absolute;
          left: 2%;
          top: 2%;
          height: 0;
          width: 0;
          transition: all 0.4s ease-in-out;
        }

        &:hover {
          ul {
            transform: translate(-50%, -50%);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.4s ease-in-out;
            opacity: 1;

            li {
              transition: all 0.4s ease-in-out;

              &:hover {
                background-color: var(--primary-color);
              }

              a {
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.4s ease-in-out;
              }
            }

            li:hover svg {
              color: var(--white-color);
            }

            svg {
              font-size: 2rem;
            }
          }

          &::before {
            height: 100%;
            width: calc(100% - 4%);
            background-color: transparent;
            opacity: 0.9;
            transform-origin: left;
            transition: all 0.4s ease-in-out;
          }
        }
      }
    }
  }
`;

export default Menu;
