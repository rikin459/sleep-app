import React from 'react'
import styled from 'styled-components';
import {AiOutlineHome} from "react-icons/ai"
import {Link} from "react-router-dom"
import SleepForm from "./SleepForm"


const MainContainer= styled.div`
  display:flex-row;
  align-items: center;
  justify-content:center;
`

function SelectionMenu() {


  return (
    <MainContainer>
      <SleepForm/>
      <Link to ="/">
            <AiOutlineHome size="10em" style={{display:"grid", 
                                                alignItems: "center",
                                                margin:"auto auto"}}
              />
        </Link>
    </MainContainer>
    
  )
}

export default SelectionMenu