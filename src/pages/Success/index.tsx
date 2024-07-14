import { PiCurrencyDollar, PiMapPinFill, PiClockFill } from "react-icons/pi";

import { SuccessContainer, Heading, Items, Order, Info } from "./styles";
import { useTheme } from "styled-components";
import { SuccessImage } from "../../assets/success-img";
import { useCart } from "../../hooks/UseCart";
import { useNavigate } from "react-router-dom";

const paymentTypeMap = {
  "credit": "Cartão de crédito",
  "debit": "Cartão de Débito",
  "pix": "Pix",
};

export function Success() {
  const theme = useTheme();
  const { orderData } = useCart();
  const navigate = useNavigate();

  if (!orderData) {
    navigate("/");
  }

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
                  Entrega em{" "}
                  <strong>
                    {orderData?.street}, {orderData?.number}
                  </strong>
                </span>
                <span>
                  {orderData?.neighborhood} - {orderData?.city}, {orderData?.uf}
                </span>
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
                <span>Método de pagamento</span>
                <strong>
                  {orderData?.paymentMethod &&
                    paymentTypeMap[orderData.paymentMethod]}
                </strong>
              </div>
            </div>
          </Items>
        </Info>
      </Order>
      <SuccessImage />
    </SuccessContainer>
  );
}
