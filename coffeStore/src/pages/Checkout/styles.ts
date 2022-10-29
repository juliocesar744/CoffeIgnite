import styled from "styled-components";

export const RequestContainer = styled.div`
  display: inline;
  align-items: center;
  justify-content: center;
  padding: 2rem 10rem;
  gap: 1rem;
`

export const Request = styled.p`
    font-family: 'Baloo 2', cursive;
    font-size: 1.25rem;
`

export const AddressContainer = styled.div`
    width: 40rem;
    height: 23.25rem;
    background: ${(props) => props.theme['gray-300']};
    border-radius: 0.3rem;
`

export const PaymentContainer = styled.div`
    width: 40rem;
    height: 12.9375rem;
    background: ${(props) => props.theme['gray-300']};
    border-radius: 0.3rem;
`

export const CoffeSelectedContainer = styled.div`
    width: 28rem;
    min-height: 25rem;
    background: ${(props) => props.theme['gray-300']};
    border-radius: 0.3rem;
`

export const ButtonStyle = styled.button`
    padding: 0 0.5rem;
    cursor: pointer;
    font: inherit;
    border: none;
    outline: none;
    background: none;

    &:focus {
        border: none;
        outline: none;
    }
`