import {
  PiCurrencyDollar,
  PiMoney,
  PiTrash,
  PiMapPinLineLight,
  PiCreditCard,
  PiBank,
} from "react-icons/pi";
import { TextInput } from "../../components/TextInput";

import {
  AddressContainer,
  ButtonRemove,
  CartContainer,
  CartContent,
  CheckoutButton,
  CheckoutContainer,
  CoffeeWrapper,
  CoffeeInfo,
  FormContainer,
  Heading,
  InputWrapper,
  PaymentContainer,
  Title,
  PaymentType,
  PaymentTypeButton,
  CartTotalPrice,
} from "./styles";
import { Counter } from "../../components/Counter";
import { priceFormatter } from "../../utils/formatter";
import { useCart } from "../../hooks/UseCart";

export function Checkout() {
  const { cartItems, cartItemTotalPrice } = useCart();

  const valueOfDelivery = cartItemTotalPrice / 10;
  const totalValueWithDelivery = cartItemTotalPrice + valueOfDelivery;
  return (
    <CheckoutContainer>
      <FormContainer>
        <Title>Complete seu pedido</Title>

        <form id="order">
          <AddressContainer>
            <Heading variant="address">
              <PiMapPinLineLight />
              <div>
                <span>Endereço de entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </Heading>

            <InputWrapper>
              <TextInput placeholder="CEP" className="cep" />
              <TextInput placeholder="Rua" />
              <div>
                <TextInput placeholder="Número" className="number" />
                <TextInput placeholder="Complemento" />
              </div>
              <div>
                <TextInput placeholder="Bairro" className="neighborhood" />
                <TextInput placeholder="Cidade" />
                <TextInput placeholder="UF" className="uf" />
              </div>
            </InputWrapper>
          </AddressContainer>

          <PaymentContainer>
            <Heading variant="payment">
              <PiCurrencyDollar />

              <div>
                <span>Pagamento</span>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </Heading>

            <PaymentType>
              <PaymentTypeButton variant="credit-card" value="credit-card">
                <PiCreditCard />
                <span>Cartão de crédito</span>
              </PaymentTypeButton>
              <PaymentTypeButton variant="debit-card" value="debit-card">
                <PiBank />
                <span>Cartão de Débito</span>
              </PaymentTypeButton>
              <PaymentTypeButton variant="cash" value="cash">
                <PiMoney />
                <span>Dinheiro</span>
              </PaymentTypeButton>
            </PaymentType>
          </PaymentContainer>
        </form>
      </FormContainer>

      <CartContainer>
        <Title>Cafés selecionados</Title>

        <CartContent>
          {cartItems.map((cart) => (
            <CoffeeWrapper>
              <div>
                <img src={cart.image} alt="" />

                <CoffeeInfo>
                  <span>{cart.title}</span>
                  <div>
                    <Counter quantity={cart.quantity} />

                    <ButtonRemove>
                      <PiTrash />
                      <span>Remover</span>
                    </ButtonRemove>
                  </div>
                </CoffeeInfo>
              </div>

              <span className="coffee-price">
                R$ {priceFormatter(cart.price * cart.quantity)}
              </span>
            </CoffeeWrapper>
          ))}

          <CartTotalPrice>
            <div>
              <span>Total de itens</span>
              <span>R${priceFormatter(cartItemTotalPrice)}</span>
            </div>

            <div>
              <span>Entrega</span>
              <span>R${priceFormatter(valueOfDelivery)}</span>
            </div>

            <div>
              <span>Total</span>
              <span>R${priceFormatter(totalValueWithDelivery)}</span>
            </div>
          </CartTotalPrice>

          <CheckoutButton type="submit" form="order">
            Confirmar pedido
          </CheckoutButton>
        </CartContent>
      </CartContainer>
    </CheckoutContainer>
  );
}
