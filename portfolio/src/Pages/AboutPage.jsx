import React from 'react'
import styled from 'styled-components'
import { MainLayout } from '../Styles/layouts'
import Title from '../Components/Title'
import ImageSection from '../Components/ImageSection'
import QualificationsSections from '../Components/QualificationsSection'
import SkillsSection from '../Components/SkillsSection'
function AboutPage() {
    return (
        <MainLayout>
            <AboutStyled>
                <Title title={'Aboout Me'} span={'About Me'} />
                <ImageSection />
                <QualificationsSections />
                <SkillsSection />
            </AboutStyled>
        </MainLayout>
    )
}
const AboutStyled = styled.section`




`

export default AboutPage
