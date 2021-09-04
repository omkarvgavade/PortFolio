import Sidebar from "./Components/Sidebar";
import styled from 'styled-components'
import HomePage from "./Pages/HomePage";
import { Switch as Switching, Route } from 'react-router-dom'
import AboutPage from "./Pages/AboutPage";
import BlogsPage from "./Pages/BlogsPage";
import ContactPage from "./Pages/ContactPage";
import PortFoliosPage from "./Pages/PortFoliosPage";
import SkillsPage from "./Pages/SkillsPage";
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Switch from '@material-ui/core/Switch'
import { useEffect, useState } from "react";
import { IconButton } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
function App() {
  const [theme, setTheme] = useState('dark-theme')
  const [checked, setChecked] = useState(false)
  const [navToggle, setNavToggle] = useState(false)
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme])
  const themeToggler = () => {
    if (theme === "light-theme") {
      setTheme('dark-theme')
      setChecked(false)
    } else {
      setTheme('light-theme')
      setChecked(true)
    }
  }
  return (
    <div className="App">
      <Sidebar navToggle={navToggle} />
      <div className="theme">
        <div className="light-dark-mode">
          <div className="left-content">
            <Brightness4Icon />
          </div>
          <div className="right-content">
            <Switch
              value=""
              checked={checked}
              onClick={themeToggler}
              inputProps={{ "aria-label": "" }}
              size="medium"
            />
          </div>
        </div>
      </div>
      <div className="ham-burger-menu">
        <IconButton onClick={() => {
          setNavToggle(!navToggle)
        }}>
          <MenuIcon />
        </IconButton>
      </div>
      <MainContentStyled >


        <Switching>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/blogs">
            <BlogsPage />
          </Route>
          <Route exact path="/skills">
            <SkillsPage />
          </Route>
          <Route exact path="/projects">
            <PortFoliosPage />
          </Route>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
        </Switching>
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`

position: relative;
margin-left: 16.3rem;
min-height: 100vh;

@media screen and (max-width:1200px){
margin-left: 0;
}

.lines{
  position: absolute;
  min-height:100vh;
  width: 100%;
display: flex;
justify-content: space-evenly;
  .line-1,.line-2,.line-3,.line-4{
    width: 1px;
    min-height: 100vh;
    background-color:var(--border-color);

  }
}
`

export default App;
