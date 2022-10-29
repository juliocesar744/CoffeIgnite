import { ShoppingCart } from 'phosphor-react'
import ExpressoAmericano from '../../../../assets/Coffes/ExpressoAmericano.svg'
import { ButtonStyle, CartContainer, CoffeContainer, CountContainer, Current, ImgContainer, Price, PriceContainer, Tag, TagContainer, TextDesc, TextName } from './styles'

let coffeExamples = [
    {
        img: ExpressoAmericano,
        qtd: 0,
        name: "Expresso Americano",
        tags: ["Com leite", "Alternativo"],
        desc: "Expresso diluído, menos intenso que o tradiocional",
        price: 9.90
    },
    {
        img: ExpressoAmericano,
        qtd: 0,
        name: "Expresso Americano",
        tags: ["teste1", "teste2"],
        desc: "Expresso diluído, menos intenso que o tradiocional",
        price: 9.90
    },
    {
        img: ExpressoAmericano,
        qtd: 0,
        name: "Expresso Americano",
        tags: ["Com leite", "Alternativo"],
        desc: "Expresso diluído, menos intenso que o tradiocional",
        price: 9.90
    },
    {
        img: ExpressoAmericano,
        qtd: 0,
        name: "Expresso Americano",
        tags: ["teste1", "teste2"],
        desc: "Expresso diluído, menos intenso que o tradiocional",
        price: 9.90
    },
    {
        img: ExpressoAmericano,
        qtd: 0,
        name: "Expresso Americano",
        tags: ["Com leite", "Alternativo"],
        desc: "Expresso diluído, menos intenso que o tradiocional",
        price: 9.90
    },
    {
        img: ExpressoAmericano,
        qtd: 0,
        name: "Expresso Americano",
        tags: ["teste1", "teste2"],
        desc: "Expresso diluído, menos intenso que o tradiocional",
        price: 9.90
    },
    {
        img: ExpressoAmericano,
        qtd: 0,
        name: "Expresso Americano",
        tags: ["Com leite", "Alternativo"],
        desc: "Expresso diluído, menos intenso que o tradiocional",
        price: 9.90
    },
    {
        img: ExpressoAmericano,
        qtd: 0,
        name: "Expresso Americano",
        tags: ["teste1", "teste2"],
        desc: "Expresso diluído, menos intenso que o tradiocional",
        price: 9.90
    },
    {
        img: ExpressoAmericano,
        qtd: 0,
        name: "Expresso Americano",
        tags: ["Com leite", "Alternativo"],
        desc: "Expresso diluído, menos intenso que o tradiocional",
        price: 9.90
    },
    {
        img: ExpressoAmericano,
        qtd: 0,
        name: "Expresso Americano",
        tags: ["teste1", "teste2"],
        desc: "Expresso diluído, menos intenso que o tradiocional",
        price: 9.90
    },
    {
        img: ExpressoAmericano,
        qtd: 0,
        name: "Expresso Americano",
        tags: ["Com leite", "Alternativo"],
        desc: "Expresso diluído, menos intenso que o tradiocional",
        price: 9.90
    },
    {
        img: ExpressoAmericano,
        qtd: 0,
        name: "Expresso Americano",
        tags: ["teste1", "teste2"],
        desc: "Expresso diluído, menos intenso que o tradiocional",
        price: 9.90
    }
]
export function Coffes() {
    return (
        <>
            {coffeExamples.map(coffe => {
                return (
                    <CoffeContainer key={coffe.name}>
                        <ImgContainer>
                            <img src={coffe.img} alt="" />
                        </ImgContainer>
                        <TagContainer>
                            {coffe.tags.map(tag => {
                                return (
                                    <Tag>{tag.toUpperCase()}</Tag>
                                )
                            })}
                        </TagContainer>
                        <TextName>{coffe.name}</TextName>
                        <TextDesc>{coffe.desc}</TextDesc>
                        <PriceContainer>
                            <Current>R$</Current>
                            <Price>{coffe.price.toFixed(2).toString()}</Price>
                            <CountContainer> 
                                <ButtonStyle>-</ButtonStyle>  
                                <span>{coffe.qtd}</span> 
                                <ButtonStyle>+</ButtonStyle>
                            </CountContainer>
                            <CartContainer>
                                <ShoppingCart size={24} weight="fill" color='white' style={{paddingTop: '6px'}}/>
                            </CartContainer>
                        </PriceContainer>
                    </CoffeContainer>
                )
            })}
        </>
    )
}