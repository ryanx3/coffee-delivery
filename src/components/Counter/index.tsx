import { PiPlusBold, PiMinusBold } from "react-icons/pi";

import { CounterContainer } from "./styles";

type CounterProps = {
  quantity: number;
  incrementQuantity?: () => void;
  decrementQuantity?: () => void;
};

export function Counter({
  quantity,
  incrementQuantity,
  decrementQuantity,
}: CounterProps) {
  return (
    <CounterContainer>
      <button disabled={quantity <= 1}>
        <PiMinusBold size={14} onClick={decrementQuantity} />
      </button>
      <span>{Number(quantity)}</span>
      <button>
        <PiPlusBold size={14} onClick={incrementQuantity} />
      </button>
    </CounterContainer>
  );
}
