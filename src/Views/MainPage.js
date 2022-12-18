import React from "react";
import styled from "styled-components";
import { AiFillPlusSquare } from "react-icons/ai";
import { Link } from "react-router-dom";
import GoalBar from "../Components/GoalBar";
import SleepTime from "../Components/SleepTime"
import {useAuth} from "../services/useAuth"




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
const ProgresQuote = styled.h4`
  text-align: left;
  font-size: 20px;
  color: grey;
  margin-bottom: 4vh;
`



function MainPage() {

  const {signUserOut} = useAuth()
 
  return (
    <>
       <div>
        <WelcomeHeader>
          <HeadingObjects>Welcome </HeadingObjects>
          <HeadingObjects icon> Add Sleep Time</HeadingObjects>
        
          <HeadingObjects icon>
            <Link to="/selection">
              <AiFillPlusSquare/>
            </Link>
          
          </HeadingObjects>
          <LogoutStyle  onClick={signUserOut}>Logout</LogoutStyle> 
        </WelcomeHeader>
        

      </div>

      <ProgresQuote>Based on data you've entered: </ProgresQuote>
      <GoalBar  />

      <ProgresQuote>Based on data you've entered: </ProgresQuote>
      <SleepTime  />

    </>
  );
}

export default MainPage;
