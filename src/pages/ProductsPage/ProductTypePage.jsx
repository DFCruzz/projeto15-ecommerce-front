import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Wrapper, ProductBox, HiddenMenu } from "./styled";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams, Link } from "react-router-dom";
import apiProducts from "../../services/apiProducts";

export default function ProductsTypePage() {
    const { type } = useParams()
    const [productsList, setProductsList] = useState([])
    const [category, setCategory] = useState("")

    async function loadPage() {
        const res = await apiProducts.getProductsType(type)
        console.log(res)
        setProductsList(res.data)
        setCategory(res.data[0].type)
    }

    useEffect(() => {
        loadPage()
    }, [])


    return (
        <Wrapper>
            <Header />
            <div className="products-container">
                <h3>Você está visualizando <span>{category}</span></h3>
                <div>
                    {productsList.map((a, index) => (
                        <ProductBox key={index}>
                            <Link to={`/product/${a._id}`}>
                                <div className="description">
                                    <img src={a.thumbURL} alt={a.name} />
                                    <div>
                                        <p>{a.name} - {a.description}</p>
                                        <h2>R$ {a.price}</h2>
                                    </div>
                                </div>
                            </Link>
                            <div className="add-btn">
                                Adicionar ao Carrinho
                            </div>
                        </ProductBox>
                    ))}
                </div>
            </div>
            <Footer />
        </Wrapper>
    )
}