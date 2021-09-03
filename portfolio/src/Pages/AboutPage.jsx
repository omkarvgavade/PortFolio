import React from 'react'
import styled from 'styled-components'
import { MainLayout } from '../Styles/layouts'
import Title from '../Components/Title'
import ImageSection from '../Components/ImageSection'
import QualificationsSections from '../Components/QualificationsSection'

function AboutPage() {
    return (
        <MainLayout>
            <AboutStyled>
                <Title title={'Aboout Me'} span={'About Me'} />
                <ImageSection />
                <QualificationsSections />
            </AboutStyled>
        </MainLayout>
    )
}
const AboutStyled = styled.section`
@media screen and (max-width:1000px){
    
}



`

export default AboutPage
