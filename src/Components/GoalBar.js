import React from "react";
import styled from "styled-components";
import ProgressCircle from "./ProgressCircle";


const Container = styled.div`
display: grid;
grid-template-columns: auto auto auto;
align-items: center;
column-gap: 20px;
width: 50%;
height: 15rem;
background-color: #d28eff;
border-radius: 3rem;
font-size: 19px;
justify-self: center;
justify-content:center;
margin:0 auto;
box-shadow: 1px 1px 30px grey;
margin-bottom: 4vh;
`;

function GoalBar() {
  
  return (

    <>
      <Container>
        <ProgressCircle />
      </Container>
    </>
  );
}

export default GoalBar;
