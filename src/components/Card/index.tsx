import { PiShoppingCartFill } from "react-icons/pi";

import { Tag } from "../Tag";

import {
  ButtonCart,
  CardContainer,
  Description,
  Image,
  OrderContainer,
  Price,
  Tags,
  Title,
} from "./styles";

import coffee from "../../assets/coffee.png";
import { Counter } from "../Counter";

export function Card() {
  return (
    <CardContainer>
      <Image src={coffee} />

      <Tags>
        <Tag>Tradicional</Tag>
        <Tag>Tradicional</Tag>
      </Tags>

      <Title>Café tradicional</Title>

      <Description>Café expresso tradicional com espuma cremosa</Description>

      <OrderContainer>
        <Price>
          <span>R$</span>
          <span>19,98</span>
        </Price>

        <div className="buy-content">
          <Counter quantity={2} />
          <ButtonCart>
            <PiShoppingCartFill size={22} />
          </ButtonCart>
        </div>
      </OrderContainer>
    </CardContainer>
  );
}
