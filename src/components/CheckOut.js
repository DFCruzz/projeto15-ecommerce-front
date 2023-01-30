import Header from "./Header"
import Footer from "./Footer"
import styled from "styled-components"
import { Link } from "react-router-dom"
import Cart from "./Cart"
import { UserContext } from "../contexts/UserContext"
import { useContext } from "react"

export default function CheckOut(){
    const { precoTotal } = useContext(UserContext);

    return(<>
    <HeaderCheckout>
    <Link to="/Cart">
    <Back >
         <ion-icon name="arrow-back-outline"/>
          Voltar 
          </Back>
    </Link>
    <A href="/home">Logo</A>
    <div/>
    </HeaderCheckout>
    <Line/>

    <BoxEntrega>
       Endereço de entrega
    </BoxEntrega>
    <Form1>
        <Box>Nome completo
        <Input1 type="text" required />
        </Box>
        <Box>
        Endereço
        <Input1 type="text" required/></Box>
        <Box>
        Informação adicional(Ex: Apto 21)
        <Input1 type="text" /></Box>
        <Box>
        Codigo postal 
        <Input1 type="number" required /></Box>
        <Box>
        Numero de Contato
        <Input1 type="number" required /></Box>

        <Button1 type="submit"> Comprar</Button1>
    </Form1>
        <Line />
        <Rodape>
            Total foi de R$: {precoTotal}
        </Rodape>

    </>)
}
const Rodape = styled.div`
margin-top: 40px;
margin-left: 20px;
font-size: 25px;
`

const Button1 = styled.button`
margin-left: 25%;
width: 100%;
margin-top: 30px;
margin-bottom: 50px;
`

const A = styled.a`
margin-top:10px;
margin-left:-20%;`

const Box = styled.div`
display:flex;
flex-wrap:wrap;
flex-direction:column;
margin-left:20px;
margin-top:15px;`

const Input1 = styled.input`
border: 2px solid #ccc;
border-radius: 4px;
height: 25px;
width: 300px;
`

const Form1 = styled.form`
display: flex;
width: 60%;
height: auto;
flex-direction:column;
`

const BoxEntrega= styled.div`
display: flex;
justify-content: center;
margin-top: 20px;
font-size: 20px;
`

const Line = styled.div`
width: 350px;
border-bottom: 1px solid #000000;
margin-left: 20px;
margin-top:-20px;`

const HeaderCheckout = styled.div`
width:100%;
height: 100px;
display: flex; 
justify-content: space-between;
` 

const Back = styled.div`
margin-left: 25px;
margin-top: 10px;
`