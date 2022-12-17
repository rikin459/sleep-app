import React,{useEffect, useState} from "react";
import styled from "styled-components";
import { useSleeper } from "../services/firebase/useSleep";
import {getDocs } from "firebase/firestore";  


const Container = styled.div`
display: grid;
grid-template-columns: auto auto auto;
align-items: center;
column-gap: 20px;
width: 50%;
height: 15rem;
font-size: 19px;
background-color: #d28eff;
border-radius: 3rem;
justify-self: center;
justify-content:center;
margin:0 auto;
box-shadow: 1px 1px 30px grey;
margin-bottom: 4vh;
`;



function SleepTime() {

  return (
    <>
      <Container>Your next sleep is at 15:00 and ends at 23:02</Container>
    </>
  );
}

export default SleepTime;
