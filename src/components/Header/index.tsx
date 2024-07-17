import { PiMapPinFill, PiShoppingCartFill } from "react-icons/pi";
import { LogoHeader } from "../../assets/logo";
import { Link } from "react-router-dom";

import { HeaderContainer, HeaderNav } from "./styles";
import { useCart } from "../../hooks/useCart";

export function Header() {
  const { cartTotalQuantity, orderData } = useCart();
  return (
    <HeaderContainer>
      <Link to={"/"}>
        <LogoHeader />
      </Link>

      <HeaderNav>
        <div>
          <PiMapPinFill size={22} />
          <span>
            {orderData ? `${orderData.city}, ${orderData.uf}` : "Curitiba, PR"}
          </span>
        </div>
        <Link to={"/checkout"}>
          <PiShoppingCartFill size={22} />
          <span>{cartTotalQuantity}</span>
        </Link>
      </HeaderNav>
    </HeaderContainer>
  );
}
