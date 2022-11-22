import styled from "styled-components";

export const RequestContainer = styled.div`
  display: inline-block;
  align-items: center;
  justify-content: center;
  padding: 2rem 10rem;
  gap: 1rem;
  width: 100%;
`

export const Request = styled.p`
    font-family: 'Baloo 2', cursive;
    font-size: 1.25rem;
`

export const AddressContainer = styled.div`
    div.title {
        display: flex;
        flex-direction: center;
        align-items: center;
        gap: 1rem;
    }

    div.text { 
        display: flex;
        flex-direction: column;
        padding-top: 1rem;
        gap: 0.2rem;
    }

    span {
        font-family: 'Roboto', monospace;
        font-size: 1rem;
    }

    p {
        font-family: 'Roboto', monospace;
        font-size: 0.875rem;
    }

    width: 40rem;
    height: 23.25rem;
    background: ${(props) => props.theme['gray-300']};
    border-radius: 0.3rem;
    padding: 2rem 3rem;
`

export const PaymentContainer = styled.div`
    width: 40rem;
    height: 12.9375rem;
    background: ${(props) => props.theme['gray-300']};
    border-radius: 0.3rem;
`

export const CoffeSelectedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 28rem;
    min-height: 25rem;
    background: ${(props) => props.theme['gray-300']};
    border-radius: 0.375rem 2.25rem;
    padding-left: 4rem;

    div.coffe {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        padding-top: 2rem;
    }

    span.value { 
        font-weight: bold;
        padding-left: 2rem;
    }

    img {
        width: 4rem;
        height: 4rem;
    }

    div.space {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
    }

    div.price {
        display: inline-block;
        gap: 2rem;
        border-radius: 0.5rem;
        font-weight: bold;
    }
`

export const ButtonStyle = styled.button`
    padding: 0 0.5rem;
    cursor: pointer;
    font: inherit;
    border: none;
    outline: none;
    background: none;
    border-radius: 0.5rem;
    &:focus {
        border: none;
        outline: none;
    border-radius: 0.5rem;
    }
`

export const FormContainer = styled.form`
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    div {
        display: flex;
        flex-direction: center;
        align-items: center;
        gap: 1rem;
    }
    
    input {
        height: 2.625rem;
        border-radius: 0.5rem;
        background: ${(props) => props.theme['gray-400']};
        border: 1px solid ${(props) => props.theme['gray-500']};
        padding: 1rem;
    }

    input.numero {
        width: 12.5rem;
    }

    input.rua {
        width: 35rem;
    }

    input.uf {
        width: 3.75rem;
    }

    input.cidade {
        width: 17.25rem;
    }

    input.complemento {
        width: 21.75rem;
    }
`

export const Line = styled.div`
    height: 0.1rem;
    background: ${(props) => props.theme['gray-500']};
`

export const PriceContainer = styled.div`
    position: relative;
    font-size: 1.25rem;
    white-space: nowrap; 
    display: inline-flex;
    align-items: center;
    gap: 1rem;

    div {
        background: ${(props) => props.theme['gray-500']};
        border-radius: 0.5rem;
    }

    button{
        border: none;
        outline: none;
        background: ${(props) => props.theme['gray-500']};
        cursor: pointer;
    }
`