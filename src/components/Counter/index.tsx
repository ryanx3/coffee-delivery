import { PiPlusBold, PiMinusBold } from "react-icons/pi";

import { CounterContainer } from "./styles";

type CounterProps = {
  quantity: number;
  incrementQuantity?: () => void;
  decrementQuantity?: () => void;
};

export function Counter({
  quantity = 1,
  incrementQuantity,
  decrementQuantity,
}: CounterProps) {
  return (
    <CounterContainer>
      <button>
        <PiMinusBold size={14} onClick={decrementQuantity} />
      </button>
      <span>{quantity}</span>
      <button>
        <PiPlusBold size={14} onClick={incrementQuantity} />
      </button>
    </CounterContainer>
  );
}
