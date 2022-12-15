import React, { useState } from 'react'
import styled from 'styled-components'
import {useForm} from 'react-hook-form'
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import Container from '../config/styles'
import { useNavigate, useLocation } from 'react-router-dom'
import {useAuth} from '../services/firebase/useAuth'

const ElementInput = styled.input`
    width: 20vh;
    margin-bottom: 2vh;
    height:3vh;
    border: 2px solid black;
    border-radius: 20px;
    text-aling: 2px;
    padding-left: 2vh;

`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin:10vh;
    justify-self:center;


`
const LoginContainer = styled(Container)`
    display:flex;
    flex-direction: column;
    height:fit-content;
    width:40%;
    justify-content: center;
    align-items: center;
`

const Button = styled.button`
    height: 3vh;
    color: rgb(60, 60, 60);
    border: 2px dotted rgba(255, 99, 71, 0.6);
    background-color: rgb(180, 180, 180);
    margin: 10px;
`

function LoginForm() {

  return (
    <>
        <LoginContainer>
            <Form 
            >
                <h2> Login Here</h2>
                
                <ElementInput />
               
                <ElementInput />
             
                <Button type = "submit">Sign in</Button>
             
            </Form>
        </LoginContainer>   
    </>
    
  )
}
export default LoginForm