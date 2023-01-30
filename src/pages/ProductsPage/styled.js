import styled from "styled-components";

export const Wrapper = styled.div`
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
            font-family: 'Press Start 2P', cursive;
            color: #013A63;
            font-size: 12px;
        }

        .image-box {
            
            img {
                margin: 0 auto;
                width: 150px;
            }
        }
    }

    .products-container {
        width: 100%;
        display: flex;
        flex-direction: column;

        h3 {
            margin: 10px;
            font-size: 18px;
            font-weight: 700;
            color: #013A63;

            span {
                font-family: 'Press Start 2P', cursive;
                color: #DC2F02;
                font-size: 16px;
            }
        }

        .producs-list {
            width: 100%;
            display: flex;
            flex-direction: column;
        }
    }
    


`

export const ProductBox = styled.div`
    width: 90%;
    height: 220px;
    background-color: #FFFFFF;
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
            color: #000000;
            line-height: 18px;

            p {
               font-size: 14px;
                
               span {
                font-weight: 700;
               }
            }

            h2 {
                font-size: 24px;
                color: #DC2F02;
                font-family: 'Itim', cursive;
            }
        }
    }

    .add-btn {
        width: 70%;
        height: 38px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #013A63;
        border-radius: 5px;
        color: #FFFFFF;
        font-family: 'Press Start 2P', cursive;
        font-size: 10px;
    }
`
