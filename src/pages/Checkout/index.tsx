import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Counter } from "../../components/Counter";
import { priceFormatter } from "../../utils/formatter";
import { useCart } from "../../hooks/UseCart";
import { TextInput } from "../../components/TextInput";
import {
  PiCurrencyDollar,
  PiMoney,
  PiTrash,
  PiMapPinLineLight,
  PiCreditCard,
  PiBank,
} from "react-icons/pi";

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
import axios from "axios";
import { toast } from "react-toastify";

const AddressFormSchema = z.object({
  cep: z.string(),
  street: z.string(),
  number: z.number(),
  complement: z.string(),
  city: z.string(),
  neighborhood: z.string(),
  uf: z.string(),
});

type AddressFormInput = z.infer<typeof AddressFormSchema>;
export function Checkout() {
  const { register, handleSubmit, formState, reset, setFocus, setValue } =
    useForm<AddressFormInput>({ resolver: zodResolver(AddressFormSchema) });

  const {
    cartItems,
    cartItemTotalPrice,
    removeCoffeeToCart,
    updateQuantityCoffeeToCart,
  } = useCart();

  const valueOfDelivery = cartItemTotalPrice / 10;
  const totalValueWithDelivery = cartItemTotalPrice + valueOfDelivery;

  function handleIncreaseQuantity(coffeeId: number) {
    updateQuantityCoffeeToCart("increase", coffeeId);
  }

  function handleDecreaseQuantity(coffeeId: number) {
    updateQuantityCoffeeToCart("decrease", coffeeId);
  }

  function handleSendingOrder() {}

  async function handleFetchCep(e: React.ChangeEvent<HTMLInputElement>) {
    const cep = e.target.value;

    if (e.type === "blur") {
      try {
        const response = await axios.get(
          `https://brasilapi.com.br/api/cep/v1/${cep}`
        );

        await toast.promise(
          new Promise((response) => setTimeout(response, 2000)),
          {
            pending: "Buscando CEP...",
            success: "CEP encontrado.",
            error: "Erro ao buscar este CEP...",
          }
        );

        setValue("street", response.data.street);
        setValue("city", response.data.city);
        setValue("neighborhood", response.data.neighborhood);
        setValue("uf", response.data.state);
        setValue("cep", cep);

        setFocus("number");
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        toast.error("Erro ao buscar dados 🤯");

        setFocus("cep");
        reset({
          cep: "",
          street: "",
          complement: "",
          city: "",
          neighborhood: "",
          uf: "",
        });
      }
    }
  }

  return (
    <CheckoutContainer>
      <FormContainer>
        <Title>Complete seu pedido</Title>
        <form id="order" onSubmit={handleSubmit(handleSendingOrder)}>
          <AddressContainer>
            <Heading variant="address">
              <PiMapPinLineLight />
              <div>
                <span>Endereço de entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </Heading>
            <InputWrapper>
              <TextInput
                placeholder="CEP"
                className="cep"
                {...register("cep")}
                onBlur={handleFetchCep}
              />
              <TextInput placeholder="Rua" {...register("street")} />
              <div>
                <TextInput
                  placeholder="Número"
                  className="number"
                  {...register("number")}
                />
                <TextInput
                  placeholder="Complemento"
                  {...register("complement")}
                />
              </div>
              <div>
                <TextInput
                  placeholder="Bairro"
                  className="neighborhood"
                  {...register("neighborhood")}
                />
                <TextInput placeholder="Cidade" {...register("city")} />
                <TextInput
                  placeholder="UF"
                  className="uf"
                  {...register("uf")}
                />
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
          <div className="scroll-coffee">
            {cartItems.map((cart) => (
              <CoffeeWrapper key={cart.id}>
                <div>
                  <img src={cart.image} alt="" />
                  <CoffeeInfo>
                    <span>{cart.title}</span>
                    <div>
                      <Counter
                        quantity={cart.quantity}
                        decrementQuantity={() =>
                          handleDecreaseQuantity(cart.id)
                        }
                        incrementQuantity={() =>
                          handleIncreaseQuantity(cart.id)
                        }
                      />
                      <ButtonRemove onClick={() => removeCoffeeToCart(cart.id)}>
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
          </div>
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
