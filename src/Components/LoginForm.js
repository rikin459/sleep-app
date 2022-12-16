import React, { useState } from 'react'
import styled from 'styled-components'
import {useForm} from 'react-hook-form'
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useNavigate, useLocation } from 'react-router-dom'
import Container from '../config/styles'



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

    const [registering,isRegistering] = useState(false)

    const [serverErrorMessage, setServerErrorMessage] = useState('')
    
    const schema = yup.object().shape({
        email: yup
          .string()
          .email("email is not valid")
          .required("you must enter a email"),
        password: yup
          .string()
          .required("name is required")
          .min(2, "name must be a a longer than two letters"),
      });
    const {register,formState: {errors},handleSubmit} = useForm({resolver: yupResolver(schema)})

    const onSubmit = async (data)=>{
        try{
            await schema.validate(data)
        }catch (e){
            console.log(JSON.stringify(e))
        }
   
        if(registering){
            try{
      
                const {email,password} = data
                console.log(email, password, "registering")
             
            }catch(e){
                setServerErrorMessage(e.message)
            }
    
        }else{
            try {
                const {email,password} = data
                console.log(email,password, "logging in")
            } catch(e){
                setServerErrorMessage(e.message)
            }
        } 
    }


  return (
    <>
        <LoginContainer>
            <Form onSubmit={handleSubmit(onSubmit)}
            >
                <h2> {registering ? "Register here" : "Login Here"}</h2>
                <p>{serverErrorMessage.message && serverErrorMessage?.message}</p>

                <ElementInput {...register("email")} placeholder="Email*"/>
                <p>{errors.email && errors.email?.message}</p>
                <ElementInput {...register("password")} type="password" placeholder='Password'/>
                <p>{errors.password && errors.password?.message}</p>
                <Button type = "submit">Sign in</Button>
                <Button type = "button" onClick={isRegistering}>Register</Button>
            </Form>
        </LoginContainer>   
     
    </>
    
  )
}
export default LoginForm