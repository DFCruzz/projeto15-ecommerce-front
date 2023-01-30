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

export const ProductBox = styled.div`
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
export const HiddenMenu = styled.div`
    display: none;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 2;
    background-color: red;

    div {
        position: fixed;
        z-index: 3;
        width: 40%;
        height: 100%;
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        padding: 18px 30px;

        h1 {
            margin-bottom: 48px;
        }

        h2 {
            margin-bottom: 12px;
        }

        nav {
            margin-left: 10px;
            
            p {
                margin-bottom: 8px;
            }
        }
    }
`