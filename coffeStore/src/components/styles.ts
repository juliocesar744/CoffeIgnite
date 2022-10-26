import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6,5rem;
  padding: 2rem 10rem;
`

export const DivRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem
`

export const Location = styled.div`
    background-color: ${(props) => props.theme['purple-300']};
    color: ${(props) => props.theme['purple-500']};
    border-radius: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 10.5rem;
`

export const CartShopping = styled.div`
    background-color: ${(props) => props.theme['yellow-300']};
    border-radius: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    
    &:hover {
        background-color: ${(props) => props.theme['yellow-700']};
    }

    &:active {
      color: ${(props) => props.theme['yellow-500']};
    }
`