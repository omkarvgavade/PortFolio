import React from 'react'
import styled from 'styled-components'
import SkillsLogo from './SkillsLogo'
import { InnerLayout } from '../Styles/layouts'
import css from '../Images/css.png'
import expressjs from '../Images/expressjs.png'
import firebase2 from '../Images/firebase2.png'
import html5 from '../Images/html5.png'
import JS from '../Images/JS.png'
import materialui from '../Images/materialui.png'
import mongodb from '../Images/mongodb.png'
import nodejs from '../Images/nodejs.png'
import react from '../Images/react.png'
import redux from '../Images/redux.png'
import Title from './Title'
function SkillsSection() {
    return (
        <InnerLayout>
            <SkillsSectionStyled>
                <Title title={"Skills"} span={"skills"} />
                <div className="mainCont">
                    <div className="frontend">
                        <h4>FronEnd</h4>
                        <SkillsLogo img={html5} title={"HTML-5"} />
                        <SkillsLogo img={css} title={"CSS-3"} />
                        <SkillsLogo img={react} title={"React"} />
                        <SkillsLogo img={redux} title={"Redux"} />
                        <SkillsLogo img={materialui} title={"Material ui"} />
                    </div>
                    <div className="backend">
                        <h4>Backend</h4>
                        <SkillsLogo img={JS} title={"JavaScript"} />
                        <SkillsLogo img={nodejs} title={"Node js"} />
                        <SkillsLogo img={mongodb} title={"Mongo DB"} />
                        <SkillsLogo img={expressjs} title={"Express js"} />
                        <SkillsLogo img={firebase2} title={"Firebase"} />
                    </div>
                </div>
            </SkillsSectionStyled>
        </InnerLayout>
    )
}


const SkillsSectionStyled = styled.div`
.mainCont{
    margin-top: 5rem;
    display: flex;
     flex-direction: column;
    justify-content:space-between;
    h4{
        color:var(--white-color)
    }
    .frontend{
        display: flex;
        align-items: center;
 justify-content:space-between;
 margin-bottom: 3rem;
    }
       .backend{
        display: flex;
         align-items: center;
         justify-content:space-between;
    
    }
}
`
export default SkillsSection
