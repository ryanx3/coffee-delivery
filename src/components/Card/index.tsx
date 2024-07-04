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
import { useCart } from "../../hooks/UseCart";
import { useState } from "react";

export interface CardType {
  id: number;
  image: string;
  tags: string[];
  title: string;
  price: number;
  description: string;
}

export interface CardProps {
  coffee: CardType;
}

export function Card({ coffee }: CardProps) {
  const { AddCoffeeToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  function handleAddCoffeeToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    };
    AddCoffeeToCart(coffeeToAdd);
  }

  function handleIncreaseQuantity() {
    setQuantity((prev) => prev + 1);
  }
  function handleDecreaseQuantity() {
    setQuantity((prev) => prev - 1);
  }

  return (
    <CardContainer>
      <Image src={coffee.image} />

      <Tags>
        {coffee.tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>

      <Title>{coffee.title}</Title>

      <Description>{coffee.description}</Description>

      <OrderContainer>
        <Price>
          <span>R$</span>
          <span>{priceFormatter(coffee.price)}</span>
        </Price>

        <div className="buy-content">
          <Counter
            quantity={quantity}
            decrementQuantity={handleDecreaseQuantity}
            incrementQuantity={handleIncreaseQuantity}
          />
          <ButtonCart onClick={handleAddCoffeeToCart}>
            <PiShoppingCartFill size={22} />
          </ButtonCart>
        </div>
      </OrderContainer>
    </CardContainer>
  );
}
