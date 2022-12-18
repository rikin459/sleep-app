import React from 'react'
import styled from 'styled-components'
import { useSleep } from '../services/useSleep'



const OuterCircle= styled.div`
    width: 6rem;
    height: 6rem;
    left: 20px;
    border-radius:50%;
    padding: 1rem;
    margin: 0.5rem;
    margin-left: 3rem;
 
  `

  const InnerCircle = styled.div`
    height:5.7rem;
    width:5.7rem;
    border-radius:50%;
    display: flex;
    align-items:center;
    justify-content:center;

    text-align:center;
    
  `

  const ProgressCircles = styled.svg`
    position:absolute;
    top:0;
    left:0;
    
  `


  const CircleContainer = styled.div`
      position: relative;
      width: 12rem;
      height: 12rem;
      text-align: center;
      font-size: 40px;
      line-height: 160px;
      height: 160px;
      color: #fff;
  `



function ProgressCircle(bedTime) {
  const {calculatedHoursSlept} = useSleep()

  const averageSleep = 8

  const timeSlept = calculatedHoursSlept(bedTime[0],bedTime[1])
  
  const sleepProgresss = Math.round((timeSlept/averageSleep) *100)



  const circlePerc = 333-(((sleepProgresss > 100 || sleepProgresss < 0 ? 100 : sleepProgresss)/100) *333) 
  

  const Circle = styled.circle`
    fill: none;
    stroke: rgb(240, 240, 240, 0.7);
    stroke-width:20px;
    stroke-dasharray: 333;
    stroke-dashoffset: ${circlePerc < 0 ? -(circlePerc) : circlePerc};
  `


  
  return (
   <>
      <div>{sleepProgresss ? `You hit ${sleepProgresss}% of your sleep last night!` : "Data not found!"}</div>
      <CircleContainer>
          <OuterCircle>
            <InnerCircle>
            </InnerCircle>
          </OuterCircle>
        <ProgressCircles>
  
            <Circle cx="111" cy ="71" r="53" stroke-linecap="round"/>
        </ProgressCircles>
          
      </CircleContainer>
   </>
  )
}

export default ProgressCircle