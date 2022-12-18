import React from "react";
import {useAuth} from "../services/firebase/useAuth"
import styled from 'styled-components'
import { Outlet, useLocation, useNavigate} from "react-router-dom"

const Container = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    align-items: center;
    column-gap: 20px;
    width: 50%;
    height: 15rem;
    background-color: #d28eff;
    border-radius: 3rem;
    justify-self: center;
    justify-content:center;
    margin:0 auto;
    box-shadow: 1px 1px 30px grey;
    margin-bottom: 4vh;
  `;

function Protected() {
    const location = useLocation()
    const navigate = useNavigate()
 
    const {isAuthenticated} = useAuth()


    function login(){
        navigate(location?.path || "/login")
    }

    return isAuthenticated?(
        <Outlet/>
    ):(
       <Container>
           <button onClick={login}> Click here to login </button>

       </Container>
    ) 
}

  export default Protected;