import styled from "styled-components";

const Footer = () => {
    return (
        <StyledFooter>
            <footer>
                <div className="footer-wrapper">
                    <div className="upper">
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
                    <div className="bottom">
                        <div className="contact">
                            <ion-icon name="logo-facebook"></ion-icon>
                            <ion-icon name="logo-instagram"></ion-icon>
                            <ion-icon name="logo-twitter"></ion-icon>
                        </div>
                    </div>
                </div>
            </footer>
        </StyledFooter>
    )
}

export default Footer

const StyledFooter = styled.div`
    width: 100%;
    max-height: 200px;
    background-color: #89C2D9;
    bottom: 0;
    left: 0;
    
    footer {
        max-width: 390px;
        width: 100%;
        height: 100%;
        margin: 0 auto;

        .footer-wrapper {
            height: 90%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            color: #575d6b;

            h3 {
                font-size: 18px;
                font-weight: 700;
                margin: 8px 0;
                color: #E85D04;
            }

            p {
                padding-bottom: 6px;
            }

            .bottom {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;

                .contact {
                    width: 60%;
                    font-size: 32px;
                    display: flex;
                    justify-content: space-around;
                    color: #e85d04;
                    margin-bottom: 8px;
                }
            }

            .upper {
                width: 100%;
                display: flex;
                width: 100%;
                justify-content: space-around;
            }
        }
    }
`