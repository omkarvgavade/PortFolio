import React from 'react'
import SkillsSection from '../Components/SkillsSection'
import { MainLayout } from '../Styles/layouts'
import Title from '../Components/Title'
import styled from 'styled-components'
function SkillsPage() {
    return (
        <MainLayout>
            <SkillsPageStyled>
                <Title title={"Skills"} span={"skills"} />
                <SkillsSection />
            </SkillsPageStyled>
        </MainLayout>
    )
}

const SkillsPageStyled = styled.section`



`

export default SkillsPage
