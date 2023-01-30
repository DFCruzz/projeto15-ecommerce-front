import Header from "./Header";
import Footer from "./Footer";
import CheckOut from "./CheckOut"
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Cart(){
    const { precoTotal, setPrecoTotal } = useContext(UserContext);

    const [numeroArtigo, setNumeroArtigo] = useState("")
    const [itens,setItens]= useState("")
    


    const req = axios.get("http://localhost:5008/cart")
    req.then((res)=>
    setItens(res.data))
    req.catch((error)=>
    console.log(error))

   
    function somar(){
        let preco = 0;
        for(let i=0;i<itens.length;i++){
           preco += parseFloat(itens[i].price.replace(',', '.'))
        }
        setPrecoTotal(preco)
     }
    
    function quantidadeMais(){
        const req = axios.patch("http://localhost:5008/cart/:name")
        req.then((res)=>
        setNumeroArtigo(res.data))
    }
    function quantidadeMenos(){
        const req = axios.post("http://localhost:5008/cart/:name")
        req.then((res)=>
        setNumeroArtigo(res.data))
    }

    somar()
    return(
        <><Header />
        <Bag>
  {itens.length === 0 ? <Empty>Carrinho vazio</Empty> : itens.map((c) => (
    <Map1>
      <Img1 src={c.imageURL} />
      <Arrumacao>
        <Nome>{c.name}</Nome>
        <Descricao>{c.description}</Descricao>
        <Line />
      </Arrumacao>
      <BoxDireita>
      <Quantidade>Quantidade: {numeroArtigo}
        <Aumentar>
            <div onClick={quantidadeMais}>
      <ion-icon name="add-outline" ></ion-icon></div>
      <div onClick={quantidadeMenos} >
      <ion-icon name="remove-outline"></ion-icon></div>
      </Aumentar>
      </Quantidade>
      <Preco>R$: {c.price}</Preco>
      </BoxDireita>
    </Map1>
    ))}
    {itens.length === 0 ? "":
     <Preco1>TOTAL: R$: {precoTotal}</Preco1>
    }</Bag>
    {itens.length === 0 ? "": (
  <Link to="/CheckOut">
    <Checkout>
      Finalizar compra
    </Checkout>
  </Link>
)}
        
        <Footer />
        </>
    )
}

const Aumentar = styled.div`
margin-left: 0px;
margin-top: 5px;
display: flex;
justify-content: space-evenly;
`

const BoxDireita = styled.div`
margin-left: -190px;

`

const Quantidade = styled.div`
margin-top: 10px;
display: flex;
flex-direction: column;

`

const Line = styled.div`
width: 350px;
margin-left: -70px;
border-bottom: 1px solid #000000;
margin-top:40px;`
 
const Empty = styled.div`
text-align: center;
`

const Checkout = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 50px;
width: 200px;
border-radius: 10px;
background-color: gray;
margin: auto;

`

const Preco1 = styled.div`
display:flex;
justify-content: center;
`

const Preco = styled.div`
position: absolute;
margin-top: 40px;
margin-bottom: 10px;
`
const Arrumacao = styled.div`
`
const Nome = styled.p`
margin-bottom: 10px;
margin-left: 10px;
`

const Descricao = styled.div`
display: flex;
flex-direction:wrap;
width: 45%;
margin-left: 10px;
`
const Map1 = styled.div`
width: 100%;
display: flex;
margin-bottom:30px;
margin-top:10px;`


const Img1 = styled.img`
width:70px;
height:100px;`

const Bag = styled.div`
width:100%;
height: 100%;
margin-left: 25px;
position:relative`
