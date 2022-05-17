import { createGlobalStyle } from "styled-components";

const StyledGlobal = createGlobalStyle`
    :root{
        --text_darkMode : hsl(0, 0%, 100%);
        --bg_darkMode:hsl(207, 26%, 17%);
        --element_darkMode: hsl(209, 23%, 22%);
        --text_lightMode: hsl(200, 15%, 8%);
        --bg_lightMode:#fafafa;
        --element_lightMode:#ffffff;
        --text2_lightMode: hsl(0, 0%, 52%);
        --fw_large:800,
        --fw_medium:600,
        --fw_small:300,
        --fs_large:"1rem",
        --fs_small:"0.875rem",
    }

    *,*::after,*::before{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    
    #root{
        width: 100%;
    }

    body{
        min-height:100vh;
        background-color: ${({ theme }) => theme.body.backgroundColor};
        color: ${({ theme }) => theme.body.color};
        font-family: 'Nunito Sans', sans-serif;
    }
`;

export default StyledGlobal;
