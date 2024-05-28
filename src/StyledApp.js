import {styled} from "styled-components";

export const StyledDiv = styled.div`
    min-height: 100vh;
    text-align: center;
    padding-top: 10rem;
    background-color: ${props => props.theme.body};
`;

export const Title = styled.h1`
    margin: 1rem;
    color: ${props => props.theme.title};
`;

export const Desc = styled.p`
    margin: 1rem;
    color: ${props => props.theme.desc};
`;



export const darkTheme = {
    body:"#1c1c1c",
    title:"#fff",
    desc:"#b6b6b6",
    icon:"#b6b6b6"
};

export const lightTheme = {
    body: "#fff",
    title: "#1c1c1c",
    desc: "#333",
    icon: "#1c1c1c"
};

