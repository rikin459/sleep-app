import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import {useLocation, useNavigate} from "react-router-dom"
import moment from 'moment/moment';





const Header = styled.h1`
width:100%;
height:15vh;
text-align: center;
color: white;
`
const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  column-gap: 6.5px;
  width: 50%;
  height: 7vh;
  background-color: #d28eff;
  border-radius: 3rem;
  justify-self: center;
  justify-content:center;
  margin:auto auto;
 
  margin-bottom: 4vh;
`;

const ButtonSave= styled.button`
  display: grid;
  align-items: center;
  column-gap: 20px;
  width: 10%;
  height: 5vh;
  background-color: #d28eff;
  border-radius: 3rem;
  justify-self: center;
  justify-content:center;
  margin:auto auto;

  margin-bottom: 4vh;
  margin-top: 10vh;
`

const Input = styled.input`
  width: fit-content;

`

function SleepForm() {
  const navigate = useNavigate()
 
  const state = useLocation()

  const {register,formState: {errors},handleSubmit} = useForm()

  const createInstance = async (data) =>{
    const {sleepTime,wakeTime,sleepDate,wakeDate} = data

    moment(sleepTime).format("hh:mm:ss")
    moment(wakeDate).format("ddd")
    const sleepPlan = { 
      email: "joeisthebest@joerocks.com",
      sleepTime,
      sleepDate:moment(sleepDate).format("DD/MM/YYYY").toString(),
      wakeTime,
      wakeDate:moment(wakeDate).format("DD/MM/YYYY").toString(),
      createdAt: new Date().toLocaleString(),
    
    }
      try{
    

        console.log(sleepPlan)
     
        navigate(state?.path || "/")
      
      }catch(e){
        console.log(e)
      }
  }  

  return (
    <>
      <Header> Welcome Guest! Please fill in the time form!</Header>
      <form onSubmit={handleSubmit(createInstance)}>
        <Container> Enter your time you went to sleep
          <Input type='time' {...register("sleepTime",{required:true})} />
          <Input type="date" {...register("sleepDate", {required: true})}/>
          <p>{errors.sleepTime?.type === "required" && "Sleep time and date in required"}</p>
       
        </Container>

        <Container> Enter your time you woke up 
            <Input type='time' {...register("wakeTime",{required:true})}/>
            <Input type="date" {...register("wakeDate", {required: true})}/>
            <p>{errors.sleepTime?.type === "required" && "Sleep time in required"}</p>
            
        </Container>
        <ButtonSave type="submit">Save</ButtonSave>
      </form>
     
    </>
    
  )
}
export default SleepForm