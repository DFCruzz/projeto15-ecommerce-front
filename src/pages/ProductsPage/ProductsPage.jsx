import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Wrapper, ProductBox, HiddenMenu } from "./styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import apiProducts from "../../services/apiProducts";
import { Link } from "react-router-dom";


export default function ProductsPage() {
    const [productsList, setProductsList] = useState([])
    const [sliderList, setSliderList] = useState([])

    async function loadList() {
        const res = await apiProducts.getProductsList()
        console.log(res)
        setProductsList(res.data)
    }

    async function loadSlider() {
        const res = await apiProducts.getSliderList()
        console.log(res)
        setSliderList(res.data)
    }
    

    useEffect(() => {
        loadList()
        loadSlider()
    }, [])


    const settings = {

        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        adaptiveHeight: true,
    }

    return (
        <Wrapper>
            <Header />
            <div className="slider-container">
                <h3>Vire um verdadeiro GAMER!</h3>
                <Slider {...settings}>
                    {sliderList.map((a, index) => (
                        <div className="image-box" key={index}>
                            <img src={a.thumbURL} alt={a.name} />
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="products-container">
                <h3>Em alta!</h3>
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
            <HiddenMenu>
                <div>
                    <h1>Logo</h1>
                    <h2>Seções</h2>
                    <nav>
                        <p>CPUs</p>
                        <p>Placas de Vídeo</p>
                        <p>Cases</p>
                        <p>Placa Mãe</p>
                        <p>Periféricos</p>
                    </nav>
                </div>
            </HiddenMenu>
            <Footer />
        </Wrapper>
    )
}
