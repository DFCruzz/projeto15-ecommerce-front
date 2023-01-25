import styled from "styled-components";

const Footer = () => {
    return (
        <StyledFooter>
            <footer>
                <div className="upper-footer">
                    <div className="left-side">
                        <h3>Se inscreva e para ficar por dentro das nossas melhores ofertas!</h3>
                        <div className="newsletter">
                            <input />
                            <ion-icon name="arrow-forward-circle"></ion-icon>
                        </div>
                        <div className="contact">
                            <ion-icon name="logo-facebook"></ion-icon>
                            <ion-icon name="logo-instagram"></ion-icon>
                            <ion-icon name="logo-twitter"></ion-icon>
                        </div>
                    </div>
                    <div className="right-side">
                        <div>
                            <h3>Me ajude!</h3>
                            <p>Rastreio</p>
                            <p>Meus Pedidos</p>
                            <p>Devoluções</p>
                            <p>FAQ</p>
                            <p>Fale Conosco</p>
                        </div>
                        <div>
                            <h3>Sobre nós</h3>
                            <p>Empresa</p>
                            <p>Trabalhe Conosco</p>
                            <p>Notícias</p>
                            <p>Blog</p>
                        </div>
                    </div>
                </div>
                <div className="bottom-footer">
                    <div>
                        <p>Desenvolvido por:</p>
                    </div>
                    <div>
                        <p>Diego Cruz <ion-icon name="logo-github"></ion-icon></p><p>Leonardo Hirano <ion-icon name="logo-github"></ion-icon></p><p>Lucas Lima <ion-icon name="logo-github"></ion-icon></p>
                    </div>
                </div>

            </footer>
        </StyledFooter>
    )
}

export default Footer

const StyledFooter = styled.div`
    width: 100%;
    height: 280px;
    background-color: #F8FAFC;
    position: fixed;
    bottom: 0;
    left: 0;
    
    footer {
        max-width: 1280px;
        width: 100%;
        height: 100%;
        margin: 0 auto;

        .upper-footer {
            height: 90%;
            display: flex;
            justify-content: space-around;
            color: #575d6b;

            .left-side {
                width: 30%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;

                .newsletter {
                    height: 30px;
                    width: 280px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: 1px solid black;
                    border-radius: 12px;

                    input {
                        width: 80%;
                        height: 90%;
                    }

                    ion-icon {
                        font-size: 28px;
                        color: #575d6b;
                    }
                }

                .contact {
                    width: 60%;
                    font-size: 32px;
                    display: flex;
                    justify-content: space-around;
                    color: #575d6b;
                }
            }

            .right-side {
                width: 30%;
                display: flex;
                justify-content: space-between;
            }
        }

        .bottom-footer {
            width: 100%;
            height: 10%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #575d6b;

            div {
                width: 100%;
                display: flex;

                p {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 18px;

                    ion-icon {
                        padding: 0 6px;
                        font-size: 20px;
                    }
                }
            }
        }
    }
`