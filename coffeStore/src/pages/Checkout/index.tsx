import { Bank, CreditCard, CurrencyDollar, MapPin, Money, Trash } from "phosphor-react";
import { AddressContainer, ButtonStyle, CoffeSelectedContainer, PaymentContainer, Request, RequestContainer } from "./styles";
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
                <MapPin/>
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>

                <form>
                    <input  type="text" id="cep" name="cep" value="CEP" />
                    <input type="text" id="rua" name="rua" value="Rua" />
                    <input type="text" id="numero" name="numero" value="Número" />
                    <input type="text" id="complemento" name="complemento" value="Complemento" />
                    <input type="text" id="bairro" name="bairro" value="Bairro" />
                    <input type="text" id="cidade" name="cidade" value="Cidade" />
                    <input type="text" id="uf" name="uf" value="UF" />
                </form>

            </AddressContainer>

            <Request> Cafés Selecionados</Request>
            <CoffeSelectedContainer>
                
                    {coffeExamples.map(coffe => {
                        return (
                            <div key={coffe.qtd}>
                                <img src={ExpressoAmericano}  />
                                {coffe.name}
                                R${coffe.price * coffe.qtd}
                                <ButtonStyle>-</ButtonStyle>  
                                    <span>{coffe.qtd}</span> 
                                <ButtonStyle>+</ButtonStyle>
                                <button>
                                    <Trash/>
                                    Remover
                                </button>
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