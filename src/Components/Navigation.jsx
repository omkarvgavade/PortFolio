import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import avatar from "../Images/avatar.jpg";
import avatar2 from "../Images/avatar2.jpeg";
import omkargavaderesume from "../Data/Resume/omkargavaderesume.pdf";
function Navigation() {
  return (
    <NavgiationStyled>
      <div className="avatar">
        <img src={avatar2} alt="" />
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink to="/" activeClassName="active-class" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active-class" exact>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" activeClassName="active-class" exact>
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" activeClassName="active-class" exact>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/blogs" activeClassName="active-class" exact>
            Blogs
          </NavLink>
        </li>
        <li>
          <a href={omkargavaderesume} target="_blank">
            {" "}
            View Resume
          </a>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active-class" exact>
            Contact
          </NavLink>
        </li>
      </ul>
      <footer className="footer">
        <p>@2021 My PortFolio Website</p>
      </footer>
    </NavgiationStyled>
  );
}

const NavgiationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);
  .avatar {
    width: 70%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 1rem 0;
    img {
      width: 100%;
      border-radius: 50%;
      border: 4px solid var(--border-color);
    }
  }
  .nav-items {
    width: 100%;
    text-align: center;
    .active-class {
      background-color: var(--primary-color);
    }
    li {
      display: block;
      a {
        display: block;
        padding: 0.45rem 0;
        position: relative;
        z-index: 10;
        text-transform: uppercase;
        transition: all 0.4s ease-in-out;
        font-weight: 600;
        letter-spacing: 1px;
        &:hover {
          cursor: pointer;
        }
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 50%;
          background-color: var(--primary-color);
          transition: All 0.4s cubic-bezier(1, -0.2, 0.25, 0.95);
          z-index: 3;
          opacity: 0.21;
          transform-origin: right;
        }
      }
      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }
  .footer {
    border-top: 1px solid var(--border-color);
    width: 100%;
    p {
      padding: 2rem 0;
      font-size: 1.1rem;
      display: block;
      text-align: center;
    }
  }
`;
export default Navigation;
