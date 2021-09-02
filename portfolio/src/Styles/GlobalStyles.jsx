import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root{
    --primary-color:#007bff;
    --secondary-color:#6c75d;
    --background-dark-color:#10121A;
    --border-color:#2e344e;
    --background-light-color:#F1F1F1;
    --white-color:#FFF;
    --font-light-color:#a4acc4;
    --font-dark-color:#313131;
    --font-dark-color-2:#151515;
    --sidebar-dark-color:#191D2B;
    --background-light-color-2:rgba(3,127,255,.3);
    --scrollbar-bg-color:#383838;
    --scrollbar-thump-color:#6b6b6b;
    --scrollbar-track-color:#383838;
    --background-dark-gray:#191D2B;
}
*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    list-style: none;
    text-decoration: none;
    font-size: 1.2rem;
}
body{
    background-color:var(--background-dark-color);
    color:var(--font-light-color)
}
a{
    font-family:inherit;
    color:inherit;
    font-size: inherit;
    font-size:1rem;
}
h1{
    font-size: 3rem;
    color:var(--white-color);
    span{
         font-size: 3rem;
    }
}
span{
    color:var(--primary-color)
}

`