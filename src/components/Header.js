import styled from "styled-components";
import Carts from "./Cart";
import { Link } from "react-router-dom";
import smallLogo from "../assets/smallLogo.png"
import { useState, useEffect } from "react"
import bigLogo from "../assets/bigLogo.png";


const Header = () => {
    const [isHidden, setIsHidden] = useState(true)

    function handleMenu() {
        setIsHidden(!isHidden)
        setIsHidden(!isHidden)
    }

    useEffect(() => {
        console.log(isHidden)
    }, [isHidden])

    return (
        <StyledHeader>
            <header>
                <div className="upper-bar">
                    <div className="dropdown-menu">
                        <ion-icon name="menu" onClick={() => {
                            setIsHidden(!isHidden)
                            setIsHidden(!isHidden)
                        }}></ion-icon>
                    </div>
                    <Link>
                        <img src={smallLogo} alt="bigbang" />
                    </Link>
                    <nav>
                        <div>
                            <Link to="/sign-in">
                                <ion-icon name="person"></ion-icon>
                            </Link>
                        </div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon onClick={Carts} name="cart"></ion-icon>
                    </nav>
                </div>
            </header>
            <HiddenMenu custom={isHidden}
                onClick={(e) => { e.currentTarget == e.target && handleMenu(e) }}>
                <div>
                    <Link to="/">
                        <img src={bigLogo} alt="bigbang" />
                    </Link>
                    <h2>Seções</h2>
                    <nav>
                        <Link to="/products/cpu">
                            <p>CPUs</p>
                        </Link>
                        <Link to="/products/gpu">
                            <p>Placas de Vídeo</p>
                        </Link>
                        <Link to="/products/case">
                            <p>Cases</p>
                        </Link>
                        <Link to="/products/motherboard">
                            <p>Placa Mãe</p>
                        </Link>
                        <Link to="/products/peripherals">
                            <p>Periféricos</p>
                        </Link>
                    </nav>
                </div>
            </HiddenMenu>
        </StyledHeader>
    )
}

export default Header

const StyledHeader = styled.div`
    width: 100%;
    height: 80px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px;

    header {
        max-width: 390px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        background-color: #012A4A;
        color: #ffffff;

        .dropdown-menu {
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;

            ion-icon {
                font-size: 28px;
            }
        }

        .upper-bar {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            a {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 50%;

                img {
                    width: 70px;
                }
            }

            nav {
                width: 100%;
                display: flex;
                justify-content: space-around;

                div {
                    font-size: 18px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }                

                ion-icon {
                    font-size: 28px;
                    padding: 0 4px;
                    cursor: pointer;
                }
            }
        }
    }

    @media (max-width: 390px) {
        width: 100%;
        height: 80px;

        header {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;

            
            
            .upper-bar {
                height: 100%;
                justify-content: space-around;

                .search-bar {
                    display: none;
                }

                .dropdown-menu {
                    width: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    ion-icon {
                        font-size: 28px;
                    }
                }

                a {
                    width: 100%;
                }

                nav {
                    width: 100%;
                    font-size: 28px;

                    p {
                        display: none;
                    }
                }
            }

            .lower-bar {
                display: none;
            }

        }
    }


`

const HiddenMenu = styled.div`
    display: ${(props) => (props.custom ? "none" : "flex")};
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.5);

    div {
        position: fixed;
        z-index: 3;
        width: 60%;
        height: 100%;
        background-color: #ffffff;
        display: flex;
        flex-direction: column;

        img {
            width: 120px;
            margin-bottom: 24px;
            margin-left: 48px;
        }

        h2 {
            margin-bottom: 24px;
            width: 100%;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Press Start 2P', cursive;
            background-color: #013A63;
            color: #f18262;
            font-size: 18px;

        }

        nav {
            margin-left: 48px;
            color: #000000;
            font-size: 18px;
            font-weight: 700;

            
            p {
                margin-bottom: 16px;
            }
        }
    }
`