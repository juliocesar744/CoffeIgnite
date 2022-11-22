import { Bank, CreditCard, CurrencyDollar, MapPin, MapPinLine, Money, Trash } from "phosphor-react";
import { AddressContainer, ButtonStyle, CoffeSelectedContainer, FormContainer, Line, PaymentContainer, PriceContainer, Request, RequestContainer } from "./styles";
import  ExpressoAmericano  from '../../assets/Coffes/ExpressoAmericano.svg'

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
        qtd: 2,
        name: "Expresso Americano",
        tags: ["teste1", "teste2"],
        desc: "Expresso diluído, menos intenso que o tradiocional",
        price: 9.90
    }
]

export function Checkout() {
    return (
        <RequestContainer>
            <Request>Complete seu pedido</Request>

            <AddressContainer>
                <div className="title">
                    <MapPinLine size={24} color={"#C47F17"}/>
                    <div className="text">
                        <span>Endereço de Entrega</span>
                        <p>Informe o endereço onde deseja receber seu pedido</p>
                    </div>
                </div>
                

                <FormContainer>
                    <div>
                        <input  type="text" id="cep" className="cep" placeholder="CEP" />
                    </div>
                    <div>
                        <input type="text" id="rua" className="rua" placeholder="Rua" />
                    </div>
                    <div>
                        <input type="text" id="numero" className="numero" placeholder="Número" />
                        <input type="text" id="complemento" className="complemento" placeholder="Complemento" />
                    </div>
                    <div>
                        <input type="text" id="bairro" className="bairro" placeholder="Bairro" />
                        <input type="text" id="cidade" className="cidade" placeholder="Cidade" />
                        <input type="text" id="uf" className="uf" placeholder="UF" />
                    </div>
                </FormContainer>

            </AddressContainer>

            <Request> Cafés Selecionados</Request>
            <CoffeSelectedContainer>
                    {coffeExamples.map(coffe => {
                        return (
                            <div className="coffe" key={coffe.qtd}>
                                <div>
                                    <img src={ExpressoAmericano}  />
                                </div>
                                <div className="space">
                                    <div>
                                        <span>{coffe.name}</span>
                                        <span className="value">R${coffe.price * coffe.qtd}</span> 
                                    </div>
                                    <PriceContainer>
                                        <div>
                                            <ButtonStyle>-</ButtonStyle>  
                                                <span>{coffe.qtd}</span> 
                                            <ButtonStyle>+</ButtonStyle>
                                        </div>
                                        <div>
                                            <ButtonStyle>
                                                <Trash/>
                                                Remover
                                            </ButtonStyle>
                                        </div>
                                    </PriceContainer>
                                </div>
                               
                                <Line />
                            </div>
                        )
                    })}
                    
            </CoffeSelectedContainer>
            
            <PaymentContainer>
                <CurrencyDollar size={20} color="#6413dd" weight="fill" />
                <span>Pagamento</span>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>

                <div>
                    <CreditCard size={32} />
                    <p>CARTÃO DE CRÉDITO</p>
                </div>
                <div>
                    <Bank size={32} />
                    <p>CARTÃO DE DÉBITO</p>
                </div>
                <div>
                    <Money size={32} />
                    <p>DINHEIRO</p>
                </div>

            </PaymentContainer>
        </RequestContainer>
    )
}