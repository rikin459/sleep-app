import React from 'react'
import styled from 'styled-components';
import {AiOutlineHome} from "react-icons/ai"


const MainContainer= styled.div`
  display:flex-row;
  align-items: center;
  justify-content:center;
`

function SelectionMenu() {


  return (
    <MainContainer>
 
      
            <AiOutlineHome size="10em" style={{display:"grid", 
                                                alignItems: "center",
                                                margin:"auto auto"}}
              />
    
    </MainContainer>
    
  )
}

export default SelectionMenu