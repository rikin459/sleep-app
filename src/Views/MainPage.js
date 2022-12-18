import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components";
import { AiFillPlusSquare } from "react-icons/ai";
import { Link } from "react-router-dom";
import GoalBar from "../Components/GoalBar";
import SleepTime from "../Components/SleepTime"
import {useAuth} from "../services/useAuth"
import {useSleep} from "../services/useSleep"
import { getDocs } from "firebase/firestore";  
import WeeklyGraph from "../Components/WeeklyGraph";
import moment from "moment";



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
  
  const [bedTime,setBedTime] = useState([])
  const {getSleep,getSleeps} = useSleep()
  const {isAuthenticated, signUserOut} = useAuth()

  let data = null
  let graphData = []
  const graphSleep = useRef([])
  

  useEffect(() => {
    const getBedTime = async() =>{
      const query = getSleep()
      const bedTimeSnapshot = await getDocs(query)
  
      bedTimeSnapshot.forEach((doc) =>{
       
        data = doc.data()
       
      })

      const sleepData= getSleeps()
      const sleepTimesSnapshot = await getDocs(sleepData)
      
      sleepTimesSnapshot.forEach((doc) =>{

        let document = doc.data()
   
        let [sleepTime,wakeTime,day] = [document.sleepTime,document.wakeTime,[moment(document.sleepDate,"DD-MM-YYYY").format("ddd DD-MM").toString(),moment(document.wakeDate,"DD-MM-YYYY").format("ddd DD-MM").toString()]]
        
        graphData.push([sleepTime,wakeTime,day])
      })

      graphSleep.current = graphData

      const {sleepTime,wakeTime} = data
      

      setBedTime([sleepTime,wakeTime])
    }
    getBedTime()
  },[isAuthenticated])
  

  const sleepGraphData = {isAuthenticated , graphSleep} 
 
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
      <GoalBar {...bedTime}  />

      <ProgresQuote>Based on data you've entered: </ProgresQuote>
      <SleepTime {...bedTime} />

      <ProgresQuote> Weekly overview </ProgresQuote>
      <WeeklyGraph {...sleepGraphData}/>

    </>
  );
}

export default MainPage;
