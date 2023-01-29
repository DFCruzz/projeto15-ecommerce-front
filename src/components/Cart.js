import styled from "styled-components";

export default function Carts(){

 const mockArray = [
        { name: "image01", tag: "common", price: "399,99", imageURL: "https://picsum.photos/140", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
       // { name: "image02", tag: "common", price: "399,99", imageURL: "https://picsum.photos/140", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
       // { name: "image03", tag: "common", price: "399,99", imageURL: "https://picsum.photos/140", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
       // { name: "image04", tag: "common", price: "399,99", imageURL: "https://picsum.photos/140", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
      //  { name: "image05", tag: "common", price: "399,99", imageURL: "https://picsum.photos/140", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
       // { name: "image06", tag: "common", price: "399,99", imageURL: "https://picsum.photos/140", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
       // { name: "image07", tag: "common", price: "399,99", imageURL: "https://picsum.photos/140", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
       // { name: "image08", tag: "common", price: "399,99", imageURL: "https://picsum.photos/140", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
       // { name: "image09", tag: "common", price: "399,99", imageURL: "https://picsum.photos/140", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
       // { name: "image10", tag: "common", price: "399,99", imageURL: "https://picsum.photos/140", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
        { name: "image11", tag: "common", price: "399,99", imageURL: "https://picsum.photos/140", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" }
    ]
    
    let precoTotal 
    function total(){
        for(let i=0;i>mockArray.length;i++){
            precoTotal = precoTotal + mockArray[i].price
            console.log(mockArray[i].price)
        }
    }
    
    total()
    return(
        <>
        <Bag > {mockArray.length}  itens  {mockArray.map((c) =><Map1> 
                 <Img1 src={c.imageURL} />
                 <Arrumacao>
                 <Nome>
                 {c.name}
                 </Nome>
                 <Descricao>
                    {c.description} 
                </Descricao> 
                </Arrumacao>
                <Preco>
                R$  {c.price} 
                </Preco>
            </Map1>
            
            )}

        </Bag>
            TOTAL: {precoTotal}
        </>
    )
}
const Preco = styled.div`
position: absolute;
right: 200px;
`
const Arrumacao = styled.div`
`
const Nome = styled.p`
margin-bottom: 10px;
`

const Descricao = styled.div`
display: flex;
flex-direction:wrap;
`
const Map1 = styled.div`
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
background-color:whitesmoke;`