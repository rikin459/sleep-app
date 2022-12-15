import React from "react";
import styled from "styled-components";
import { AiFillPlusSquare } from "react-icons/ai";




const WelcomeHeader = styled.div`
    display: flex;
    flex-wrap: wrap;
  `

  const HeadingObjects = styled.h1`
   
    text-align: ${props => props.icon ? "right": "left"};
    color: white;
    height: 100%;
    padding-left: 1rem;
    flex: ${props => props.icon ? "30%": "50%"};
    padding-right: ${props => props.icon ? "2rem":"0px"};
    padding-bottom: ${props => props.icon ? "1rem":"0px"};
    justify-content: center;
   
  `
  const LogoutStyle = styled.button`

  `



function MainPage() {

 
  return (
    <>
      <div>
        <WelcomeHeader>
          <HeadingObjects>Welcome </HeadingObjects>
          <HeadingObjects icon> Add Sleep Time</HeadingObjects>
        
        
          <LogoutStyle>Logout</LogoutStyle> 
   
          <HeadingObjects icon>
         
            <AiFillPlusSquare/>
    
          </HeadingObjects>
        
        </WelcomeHeader>
        
      </div>

    </>
  );
}

export default MainPage;
