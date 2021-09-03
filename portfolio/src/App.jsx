import Sidebar from "./Components/Sidebar";
import styled from 'styled-components'
import HomePage from "./Pages/HomePage";
import { Switch, Route } from 'react-router-dom'
import AboutPage from "./Pages/AboutPage";
import BlogsPage from "./Pages/BlogsPage";
import ContactPage from "./Pages/ContactPage";
import PortFoliosPage from "./Pages/PortFoliosPage";
import SkillsPage from "./Pages/SkillsPage";
function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainContentStyled >
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>
        <Switch>
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
          <Route exact path="/portfolios">
            <PortFoliosPage />
          </Route>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
        </Switch>
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`

position: relative;
margin-left: 16.3rem;
min-height: 100vh;
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
