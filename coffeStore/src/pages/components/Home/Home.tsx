import Coffe from '../../../assets/Coffe.svg'
import { HomeContainer, SubText, Text } from './styles'

export function Home() {
    return (
        <HomeContainer>
            <div>
                <Text>Encontre o café perfeito para qualquer hora do dia</Text>
                <SubText>Com o Coffe Delivery você recebe seu café onde estiver, a qualquer hora</SubText>
            </div>

            <div>
                <img src={Coffe} alt="" />
            </div>
        </HomeContainer>
    )
}