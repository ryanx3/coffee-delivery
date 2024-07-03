import { PiCurrencyDollar, PiMapPinFill, PiClockFill } from "react-icons/pi";

import { SuccessContainer, Heading, Items, Order, Info } from "./styles";
import { useTheme } from "styled-components";
import { SuccessImage } from "../../assets/success-img";

export function Success() {
  const theme = useTheme();
  return (
    <SuccessContainer>
      <Order>
        <Heading>
          <h2>Uhu! Pedido confirmado</h2>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </Heading>
        <Info>
          <Items>
            <div>
              <PiMapPinFill
                size={32}
                color={theme.colors.background}
                style={{ backgroundColor: theme.colors.purple }}
              />
              <div>
                <span>
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </span>
                <span>Farrapos - Porto Alegre, RS</span>
              </div>
            </div>

            <div>
              <PiClockFill
                size={32}
                color={theme.colors.background}
                style={{ backgroundColor: theme.colors["yellow-dark"] }}
              />
              <div>
                <span>Previsão de entrega</span>
                <strong>20 min - 30 min</strong>
              </div>
            </div>

            <div>
              <PiCurrencyDollar
                size={32}
                color={theme.colors.background}
                style={{ backgroundColor: theme.colors.yellow }}
              />
              <div>
                <span>Pagamento na entrega</span>
                <strong>Cartão de crédito</strong>
              </div>
            </div>
          </Items>
        </Info>
      </Order>
      <SuccessImage />
    </SuccessContainer>
  );
}
