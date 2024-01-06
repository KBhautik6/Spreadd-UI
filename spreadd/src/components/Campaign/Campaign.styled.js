import styled from "styled-components";

export const StyledSection=styled.div`
    position: sticky;
    top: 0;
    right: 0;
    padding: 50px 0;
`

export const StyledWrapper=styled.div`
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;

    @media screen and (max-width:1200px){
        max-width: 980px;
        width:100%;
        padding: 0 15px;
    }
`

export const StyledInnerWrapper=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width:991px){
        flex-direction: column-reverse;
    }
`

