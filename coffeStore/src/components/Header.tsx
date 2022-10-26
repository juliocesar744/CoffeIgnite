import { ShoppingCart, MapPin } from "phosphor-react";
import { NavLink } from "react-router-dom";
import LogoCoffe from "../assets/LogoCoffe.svg"
import { CartShopping, DivRight, HeaderContainer, Location } from './styles'

export function Header() {
    return (
    <HeaderContainer>
        <NavLink to="/">
            <img src={LogoCoffe} alt="" />
        </NavLink>
        <DivRight>     
            <Location>
                <MapPin size={24} color="#8047F8" weight="fill" />
                    Porto Alegre, RS
            </Location>
            <CartShopping>
                <NavLink to="/checkout">
                    <ShoppingCart size={24} color="#C47F17" weight="fill"/>
            </NavLink>
            </CartShopping>
        </DivRight>
    </HeaderContainer>
    )
}