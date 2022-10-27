import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import Coffe from '../../../assets/Coffe.svg'
import { Coffes } from '../Coffes'
import { BaseText, CoffesContainer, DivIcons, HomeContainer, SubText, Text, TextCoffe } from './styles'

export function Home() {
    return (
        <>
            <HomeContainer>
                <div>
                    <Text>Encontre o café perfeito para qualquer hora do dia</Text>
                    <SubText>Com o Coffe Delivery você recebe seu café onde estiver, a qualquer hora</SubText>
                    <DivIcons>
                        <BaseText>
                            <ShoppingCart size={24} color="#DBAC2C" weight="fill"/> 
                            Compra simples e segura
                        </BaseText>
                        <BaseText>
                            <Package size={20} color="#272221" weight="fill" />
                            Embalagem mantém o café intacto
                        </BaseText>
                        
                    </DivIcons>
                    <DivIcons>
                        <BaseText>
                            <Timer size={20} color="#C47F17" weight="fill" />
                            Entrega rápida e rastreada
                        </BaseText>
                        <BaseText>
                            <Coffee size={20} color="#6413dd" weight="fill" />
                            O café chega fresquinho até você
                        </BaseText>
                    </DivIcons>
                </div>

                <div>
                    <img src={Coffe} alt="" />
                </div>
            </HomeContainer>
            <TextCoffe>Nossos cafés</TextCoffe>

            <CoffesContainer>
                <Coffes></Coffes>
            </CoffesContainer>
        </>
    )
}