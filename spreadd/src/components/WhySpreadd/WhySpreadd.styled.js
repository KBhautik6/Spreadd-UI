import styled from "styled-components";

export const StyledSection=styled.div`
    background: white;
    padding: 120px 0px;

    @media screen and (max-width: 991px){
    padding: 50px 0px;
    }
`

export const StyledContainer=styled.div`
    max-width: 1100px;
    width: 100%;
    margin: 0px auto;

    @media screen and (max-width: 1200px){
    padding: 0px 15px;
    }
`

export const StyledHeadingWrapper=styled.div`
    text-align: center;
`

export const StyledHeading=styled.h3`
    margin-top: 0;
    margin-bottom: 0.5em;
    color: #212b36;
    font-weight: 500;
`
export const StyledText=styled.p`
    margin-top: 0;
    margin-bottom: 1em;
`

export const StyledBoxWrapper=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    gap: 20px;
    padding: 36px 0px;
    margin-top: 20px;

    &::before{
        content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    left: 0px;
    margin: 0px auto;
    background: rgb(244, 247, 249);
    width: 80%;
    height: 360px;
    }

    @media screen and (max-width: 1200px) {
        gap: 15px;
    }
    @media screen and (max-width: 991px){ 
    &::before {
    width: 100%;
    height: 80%;
    top: 50px;}
    }
`

export const StyledBox=styled.div`
    background: #ffffff;
    box-shadow: rgba(49, 49, 49, 0.1) 0px 81.2357px 64.9886px;
    border-radius: 5px;
    max-width: 33%;
    width: 100%;
    min-height: 290px;
    padding: 30px;
    z-index: 2;
    font-size: 1.5rem;
`

export const StyledBoxIconWrapper=styled.div`
    margin-bottom: 20px;
`

export const StyledBoxIcon=styled.div`
    vertical-align: middle;
`

export const StyledBoxHeading=styled.h5`
    margin-top: 0;
    margin-bottom: 0.5em;
    color: #212b36;
    font-weight: 500;
`

export const StyledBoxText=styled.p`
    margin: 0px;
`
