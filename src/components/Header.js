import styled from "styled-components";

const Header = () => {
    return (
        <StyledHeader>
            <header>
                <div className="upper-bar">
                    <div className="dropdown-menu">
                        <ion-icon name="menu"></ion-icon>
                    </div>
                    <a href="#">Logo</a>
                    <div className="search-bar">
                        <ion-icon name="search-outline"></ion-icon>
                        <input placeholder="Busque aqui..." />

                    </div>
                    <nav>
                        <div><ion-icon name="person"></ion-icon><p>Log In</p></div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="cart"></ion-icon>
                    </nav>
                </div>
                <div className="lower-bar">
                    <div>section</div>
                    <div>section</div>
                    <div>section</div>
                    <div>section</div>
                    <div>section</div>
                    <div>section</div>
                </div>
            </header>
        </StyledHeader>
    )
}

export default Header

const StyledHeader = styled.div`
    width: 100%;
    height: 120px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px;

    header {
        max-width: 1280px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        margin: 0 auto;

        .dropdown-menu {
            display: none;
        }

        .upper-bar {
            width: 100%;
            height: 70%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            nav {
                width: 20%;
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

            a {
                width: 15%;
                text-align: center;
            }

            .search-bar {
                width: 60%;
                height: 32px;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid #DBE2EA;
                border-radius: 12px;

                ion-icon {
                    font-size: 28px;
                    padding: 0 6px;
                }

                input {
                    background-color: transparent;
                    width: 90%;
                    height: 90%;
                }
            }
        }

        .lower-bar {
            width: 100%;
            height: 30%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            div {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 24px;
                transition: 300ms ease-in-out;
                cursor: pointer;

                &:hover {
                    background-color: #D76E86;
                    color: #DBE2EA;
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