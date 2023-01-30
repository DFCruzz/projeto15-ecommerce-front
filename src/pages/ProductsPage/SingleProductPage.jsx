import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Rater from "react-rater";
import 'react-rater/lib/react-rater.css'
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiProducts from "../../services/apiProducts";


export default function SingleProductPage() {
    const { productId } = useParams()
    const [product, setProduct] = useState([])
    const [sliderList, setSliderList] = useState([])

    async function loadPage() {
        const res = await apiProducts.getProduct(productId)
        console.log(res.data)
        setProduct(res.data[0])
    }

    async function loadSlider() {
        const res = await apiProducts.getSliderList()
        setSliderList(res.data)
    }

    useEffect(() => {
        loadPage()
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
        <ProductWrapper>
            <Header />
            <div className="product-container">
                <img src={product.imageURL} alt={product.name} />
                <h3>{product.name}</h3>
                <div className="rater">
                    <Rater rating={4.5} interactive={false} />
                </div>
                <h2>R$ {product.price}</h2>
                <div className="add-btn">Adicionar ao Carinho</div>
            </div>
            <div className="slider-container">
                <h3>Veja também</h3>
                <Slider {...settings}>
                    {sliderList.map((a, index) => (
                        <div className="image-box" key={index}>
                            <img src={a.thumbURL} alt={a.name} />
                        </div>
                    ))}
                </Slider>
            </div>

            <Footer />
        </ProductWrapper>
    )
}

const ProductWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    .product-container {
        margin-top: 10px;

         img {
            width: 100%;
         }

         h3 {
            margin-bottom: 8px;
            font-size: 28px;
            margin-left: 18px;
         }

         .rater {
            margin-left: 18px;
         }

         h2 {
            margin-top: 8px;
            font-size: 32px;
            font-weight: 700;
            margin-left: 18px;
         }

         .add-btn {
            width: 80%;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #b2b2b2;
            border-radius: 5px;
            margin: 24px auto;

         }

    }

    .slider-container {
        margin-top: 30px;
        padding-bottom: 20px;

        h3 {
            display: flex;
            margin-bottom: 10px;
            justify-content: center;
        }

        .image-box {
            
            img {
                margin: 0 auto;
            }
        }
    }


`