import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { registerAuthor } from '../../api/AuthAPI'
import { useNavigate } from "react-router-dom"

const Register = () => {
    const navigate = useNavigate()
   

    const schema = yup.object({
        email: yup.string().required(),
        userName: yup.string().required(),
        password: yup.string().required(),
        confirm: yup.string().oneOf([yup.ref("password")])
    })

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

 

    const onHandleSubmit = handleSubmit(async (data: any) => {
        const { userName, email, password } = data
        const formData = new FormData()

        formData.append("name", userName)
        formData.append("email", email)
        formData.append("password", password)


        registerAuthor(formData).then(() => {
            navigate("/sign-in")
        })
        // reset()
    })


    return (
        <div>
            <Container>
               <Right>
               <Main onSubmit={onHandleSubmit} >
                    <Title>Create an account</Title>
                    <SubTitle>Sign up now and unlock exculusive access!</SubTitle>

                    <InputHolder>
                        <InputTitle>User Name</InputTitle>
                        <Input
                            placeholder='User Name'
                            {...register("userName")}
                        />
                    </InputHolder>
                    {errors.userName && <Error>Error</Error>}

                    <InputHolder>
                        <InputTitle>Email</InputTitle>
                        <Input
                            placeholder='Email'
                            {...register("email")}
                        />
                    </InputHolder>
                    {errors.email && <Error>Error</Error>}

                    <InputHolder>
                        <InputTitle>Password</InputTitle>
                        <Input
                            placeholder='Password'
                            {...register("password")}
                        />
                    </InputHolder>
                    {errors.password && <Error>Error</Error>}

                    <InputHolder>
                        <InputTitle>Confirm</InputTitle>
                        <Input
                            placeholder='Confirm'
                            {...register("confirm")}
                        />
                    </InputHolder>
                    {errors.password && <Error>Error</Error>}

                    <Button type="submit" >Register</Button>

                    <Holder>
                        <Line />
                        <LineText>Already have an Account</LineText>
                        <Line />
                    </Holder>
                    <Button2 to="/sign-in" >Sign in</Button2>
                </Main>
               </Right>
            </Container>
        </div>
    )
}

export default Register


const SubTitle = styled.div`
margin-bottom: 18px;
font-weight: bold;
color: #735f92;
font-size: medium;
display: flex;
align-items: center;
justify-content: center;
`

const Title = styled.div`
margin-bottom: 22px;
font-weight: 600;
font-size: large;
color: #1a111c;
`

const LineText = styled.div`
text-transform: uppercase;
font-size: 10px;
margin: 0 6px;
width: 100%;
text-align: center;
line-height:1.2;
`

const Line = styled.div`
width: 100%;
border-bottom: 1px solid;
border-color: black;
`

const Holder = styled.div`
display: flex;
width: 90%;
align-items: center;
margin-bottom: 20px;
`

const Button2 = styled(Link)`
width: 90%;
background-color: #601ef8c5 ;
color:  white;
height: 43px;
display: flex;
align-items:center;
justify-content: center;
margin: 10px 0;
border-radius: 3px;
text-decoration: none;
`

const Button = styled.button`
width: 90%;
background-color: #8a08fb;
color:  white;
height: 43px;
display: flex;
align-items:center;
justify-content: center;
margin: 10px 0;
border-radius: 3px;
font-size: 15px;
font-family: Poppins;
outline: none;
border:0;
`

const Error = styled.div`
font-size: 10px;
color: #53012e;
font-weight: bold;
text-align: right;
width:90%;
margin-bottom: 7px;
`

const Input = styled.input`
background-color: white;
border: 0;
outline: none;
width: 96%;
height: 95%;
padding-left: 10px;
`

const InputTitle = styled.div`
/* background-color:  white; */
margin: 0 10px;
position: absolute;
top:-10px;
left: 0;
font-size: 12px;
color: blueviolet;
`

const InputHolder = styled.div`
display: flex;
flex-direction: column;
position: relative;
width: 90%;
height: 40px;
border: 1px solid silver;
border-radius: 3px;
margin: 10px 0;


`




const Main = styled.form`
width: 350px;
min-height: 400px;
border: 1px solid silver;
border-radius: 5px;
display: flex;
flex-direction: column;
align-items: center;
padding: 10px 0;
`

const Container = styled.div`
width: 100%;
height: 100vh;
background-color: white;
color: #ba9ff8;
display:flex;
justify-content: center;
align-items: center;

`

const Right = styled.div``