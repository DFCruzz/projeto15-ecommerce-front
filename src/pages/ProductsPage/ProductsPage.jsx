import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function ProductsPage() {
    const sliderMockArray = [
        { name: "image01", tag: "common", imageURL: "https://picsum.photos/150" },
        { name: "image02", tag: "common", imageURL: "https://picsum.photos/150" },
        { name: "image03", tag: "common", imageURL: "https://picsum.photos/150" },
        { name: "image04", tag: "common", imageURL: "https://picsum.photos/150" },
        { name: "image05", tag: "common", imageURL: "https://picsum.photos/150" },
        { name: "image06", tag: "common", imageURL: "https://picsum.photos/150" },
        { name: "image07", tag: "common", imageURL: "https://picsum.photos/150" }
    ]

    const mockArray = [
        { name: "image01", tag: "common", price: "399,99", imageURL: "https://picsum.photos/140", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
        { name: "image02", tag: "common", price: "399,99", imageURL: "https://picsum.photos/140", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
        { name: "image03", tag: "common", price: "399,99", imageURL: "https://picsum.photos/140", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
        { name: "image04", tag: "common", price: "399,99", imageURL: "https://picsum.photos/140", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
        { name: "image05", tag: "common", price: "399,99", imageURL: "https://picsum.photos/140", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
        { name: "image06", tag: "common", price: "399,99", imageURL: "https://picsum.photos/140", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
        { name: "image07", tag: "common", price: "399,99", imageURL: "https://picsum.photos/140", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
        { name: "image08", tag: "common", price: "399,99", imageURL: "https://picsum.photos/140", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
        { name: "image09", tag: "common", price: "399,99", imageURL: "https://picsum.photos/140", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
        { name: "image10", tag: "common", price: "399,99", imageURL: "https://picsum.photos/140", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
        { name: "image11", tag: "common", price: "399,99", imageURL: "https://picsum.photos/140", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" }
    ]

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
                    {sliderMockArray.map((a, index) => (
                        <div className="image-box" key={index}>
                            <img src={a.imageURL} alt={a.name} />
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="products-container">
                <h3>Em alta!</h3>
                <div>
                    {mockArray.map((a, index) => (
                        <ProductBox key={index}>
                            <div className="description">
                                <img src={a.imageURL} alt={a.name} />
                                <div>
                                    <p>{a.name} - {a.description}</p>
                                    <h2>R$ {a.price}</h2>
                                </div>
                            </div>
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

const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    
    .slider-container {
        margin-top: 30px;
        padding-bottom: 20px;
        border-bottom: 1px solid #000000;

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

    .products-container {
        width: 100%;
        display: flex;
        flex-direction: column;

        h3 {
            margin: 10px;
        }

        .producs-list {
            width: 100%;
            display: flex;
            flex-direction: column;
        }
    }
    


`

const ProductBox = styled.div`
    width: 90%;
    height: 220px;
    background-color: #ffeefe;
    border-radius: 12px;
    margin: 16px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    .description {
        display: flex;
        justify-content: space-around;
        width: 90%;
        margin-bottom: 12px;

        img {
            max-height: 140px;
            border-radius: 12px;
            margin-right: 12px;
        }

        div {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }
    }

    .add-btn {
        width: 70%;
        height: 38px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #000000;
        border-radius: 5px;
        color: #FFFFFF;
    }
`
