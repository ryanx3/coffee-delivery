import { PiMapPinFill, PiShoppingCartFill } from "react-icons/pi";
import { LogoHeader } from "../../assets/logo";
import { Link } from "react-router-dom";

import { HeaderContainer, HeaderNav } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <Link to={"/"}>
        <LogoHeader/>
      </Link>

      <HeaderNav>
        <div>
          <PiMapPinFill size={22} />
          <span>Curitiba, PR</span>
        </div>
        <Link to={"/checkout"}>
          <PiShoppingCartFill size={22} />
          <span>2</span>
        </Link>
      </HeaderNav>
    </HeaderContainer>
  );
}
