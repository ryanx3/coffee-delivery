import { PiShoppingCartFill } from "react-icons/pi";

import { Tag } from "../Tag";
import { Counter } from "../Counter";
import { priceFormatter } from "../../utils/formatter";

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

interface CardType {
  id: number;
  image: string;
  tags: string[];
  title: string;
  price: number;
  description: string;
}

interface CardProps {
  data: CardType;
}

export function Card({ data }: CardProps) {
  return (
    <CardContainer>
      <Image src={data.image} />

      <Tags>
        {data.tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>

      <Title>{data.title}</Title>

      <Description>{data.description}</Description>

      <OrderContainer>
        <Price>
          <span>R$</span>
          <span>{priceFormatter(data.price)}</span>
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
