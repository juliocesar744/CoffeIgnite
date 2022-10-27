import styled from "styled-components";

export const CoffeContainer = styled.div`
    text-align: center;
    height: 19.375rem;
    width: 16rem;
    background: ${(props) => props.theme["gray-300"]};
    border-radius: 0.375rem 2.25rem;
`

export const ImgContainer = styled.div`
    position: relative;
    top: -1.2rem
`

export const Tag = styled.span`
    font-family: 'Baloo 2';
    font-size: 0.8rem;
    background: ${(props) => props.theme["yellow-300"]};
    color:  ${(props) => props.theme["yellow-700"]};
    padding: 0 10px;
    border-radius: 6.25rem;
`

export const TagContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.45rem;
    position: relative;
    top: -1.2rem
`

export const TextName = styled.p`
    font-family: 'Baloo 2';
    font-weight: bold;
    font-size: 1.25rem;
`

export const TextDesc = styled.p`
    font-family: 'Roboto';
    font-size: 0.875rem;
    padding: 0 20px;
`

export const PriceContainer = styled.div`
    position: relative;
    top: 2.5rem;
    font-family: 'Baloo 2';
    font-weight: bold;
    font-size: 1.25rem;
`

export const Current = styled.span`
    font-family: 'Roboto';
    font-size: 0.875rem;
`