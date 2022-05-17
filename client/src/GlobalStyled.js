import { createGlobalStyle } from "styled-components";

const StyledGlobal = createGlobalStyle`
    :root{
        --text_darkMode : hsl(0, 0%, 100%);
        --bg_darkMode:hsl(207, 26%, 17%);
        --element_darkMode: hsl(209, 23%, 22%);
        --text_lightMode: hsl(200, 15%, 8%);
        --bg_lightMode:hsl(0, 0%, 98%);
        --element_lightMode:hsl(0, 0%, 52%);
    }

    *,*::after,*::before{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    
    #root{
        display: flex;
        align-items: center;
        justify-content:center;
        width: 100%;
    }

    body{
        min-height:100vh;
        background-color: ${({ theme }) => theme.body.backgroundColor};
        color: ${({ theme }) => theme.body.color};
    }
`;

export default StyledGlobal;
