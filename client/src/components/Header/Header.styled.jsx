import styled from "styled-components";
import { MoonOutline } from "@styled-icons/evaicons-outline/MoonOutline";
import { Moon } from "@styled-icons/heroicons-solid/Moon";

const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.header.backgroundColor};
    box-shadow: ${({ theme }) => theme.body.boxShadow};
    color: ${({ theme }) => theme.body.color};
    min-height: 10vh;
    display: flex;
    padding: 0 3em;
    align-items: center;
    width: 100%;
    button {
        display: flex;
        gap: 0.5em;
        border:none;
        background-color:transparent;
        align-items: center;
        color : ${({ theme }) => theme.body.color};
        font-weight:300;
        font-size:0.875rem;
        margin-left:auto;
    }
    
    h1{
        font-weight: 800;
        font-size: var(--fs_large);
    }

`;

const StyledIcon = styled(MoonOutline)`
    width : 20px;
    height : 20px;
`;

const StyledDarkModeIcon = styled(Moon)`
    width : 20px;
    height : 20px;
`;

export { StyledIcon, StyledHeader, StyledDarkModeIcon };
