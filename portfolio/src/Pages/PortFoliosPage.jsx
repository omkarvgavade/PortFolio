import React from 'react'
import { MainLayout, InnerLayout } from '../Styles/layouts'
import Title from '../Components/Title'
import { useState } from 'react'
import { projects } from '../Data/projects'
import Menu from '../Components/Menu'
import { Button } from '@material-ui/core'

const allButtons = ["All", ""]

function PortFoliosPage() {
    const [menuItem, setMenuItem] = useState(projects)


    return (
        <MainLayout>
            <Title title={"Portfolios"} span={"Portfolios"} />
            <InnerLayout>
                <Menu menuItem={menuItem} />
            </InnerLayout>

        </MainLayout>
    )
}

export default PortFoliosPage
