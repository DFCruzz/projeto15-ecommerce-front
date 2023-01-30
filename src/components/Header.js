import styled from "styled-components";

const Header = () => {

    return (
        <StyledHeader>
            <header>
                <div className="upper-bar">
                    <div className="dropdown-menu">
                        <ion-icon name="menu"></ion-icon>
                    </div>
                    <a href="/home">Logo</a>
                    <nav>
                        <div><ion-icon name="person"></ion-icon></div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="cart"></ion-icon>
                    </nav>
                </div>
            </header>
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
                width: 100%;
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