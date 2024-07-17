import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaCartPlus } from "react-icons/fa";
import { Controller, useForm } from "react-hook-form";
import { Counter } from "../../components/Counter";
import { priceFormatter } from "../../utils/formatter";
import { useCart } from "../../hooks/useCart";
import { Input } from "../../components/Input";
import {
  PiCurrencyDollar,
  PiPixLogo,
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
  EmptyCart,
} from "./styles";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddressFormSchema = z.object({
  cep: z.number({ invalid_type_error: "Informe o CEP" }),
  street: z.string().min(1, "Informe a rua"),
  number: z.number().min(1, "Informe o número"),
  complement: z.string().optional(),
  neighborhood: z.string().min(1, "Informe o bairro"),
  city: z.string().min(1, "Informe a cidade"),
  uf: z.string().min(1, "Informe a UF"),
  paymentMethod: z.enum(["credit", "debit", "pix"], {
    invalid_type_error: "Informe um método de pagamento",
  }),
});

export type OrderInfo = z.infer<typeof AddressFormSchema>;
export function Checkout() {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
    setFocus,
    setValue,
  } = useForm<OrderInfo>({
    resolver: zodResolver(AddressFormSchema),
    defaultValues: { paymentMethod: "pix" },
  });

  const {
    cartItems,
    cartItemTotalPrice,
    removeCoffeeToCart,
    updatedQuantityOfCoffees,
    setOrderData,
    clearCart,
  } = useCart();

  const navigate = useNavigate();

  const valueOfDelivery = cartItemTotalPrice / 10;
  const totalValueWithDelivery = cartItemTotalPrice + valueOfDelivery;

  const [inputsDisabled, setInputsDisabled] = useState(true);

  function handleIncreaseQuantity(coffeeId: number) {
    updatedQuantityOfCoffees("increase", coffeeId);
  }

  function handleDecreaseQuantity(coffeeId: number) {
    updatedQuantityOfCoffees("decrease", coffeeId);
  }

  async function handleSendingOrder(data: OrderInfo) {
    setOrderData(data);
    clearCart();
    navigate("/success");
  }

  async function handleFetchCep() {
    const cep = watch("cep");

    try {
      await toast.promise(
        axios
          .get(`https://brasilapi.com.br/api/cep/v1/${cep}`)
          .then((response) => {
            setValue("cep", cep);
            setValue("street", response.data.street);
            setValue("city", response.data.city);
            setValue("neighborhood", response.data.neighborhood);
            setValue("uf", response.data.state);

            setInputsDisabled(false);
            setFocus("number");
          }),
        {
          pending: "Buscando CEP...",
          success: "CEP encontrado.",
          error: "Digite um CEP válido.",
        }
      );
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
      setFocus("cep");
      reset({
        cep: 0,
        street: "",
        complement: "",
        city: "",
        neighborhood: "",
        uf: "",
      });
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
              <Input
                placeholder="CEP"
                {...register("cep", {
                  setValueAs: (value: string) => parseInt(value, 10),
                })}
                type="number"
                onBlur={handleFetchCep}
                helperText={errors.cep?.message}
              />

              <Input
                placeholder="Rua"
                {...register("street")}
                disabled={inputsDisabled}
                helperText={errors.street?.message}
              />
              <div>
                <Input
                  placeholder="Número"
                  {...register("number", {
                    setValueAs: (value: string) => parseInt(value, 10),
                  })}
                  helperText={errors.number?.message}
                />
                <Input
                  placeholder="Complemento"
                  {...register("complement")}
                  disabled={inputsDisabled}
                  optionalText
                />
              </div>
              <div>
                <Input
                  placeholder="Bairro"
                  {...register("neighborhood")}
                  disabled={inputsDisabled}
                  helperText={errors.neighborhood?.message}
                />

                <Input
                  placeholder="Cidade"
                  {...register("city")}
                  disabled={inputsDisabled}
                  helperText={errors.city?.message}
                />
                <Input
                  placeholder="UF"
                  className="uf"
                  {...register("uf")}
                  helperText={errors.uf?.message}
                  disabled={inputsDisabled}
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

            <Controller
              control={control}
              name="paymentMethod"
              render={({ field }) => {
                return (
                  <PaymentType
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <PaymentTypeButton variant="pix" value="pix">
                      <PiPixLogo />
                      <span>Pix</span>
                    </PaymentTypeButton>
                    <PaymentTypeButton variant="credit" value="credit">
                      <PiCreditCard />
                      <span>Cartão de crédito</span>
                    </PaymentTypeButton>
                    <PaymentTypeButton variant="debit" value="debit">
                      <PiBank />
                      <span>Cartão de Débito</span>
                    </PaymentTypeButton>
                  </PaymentType>
                );
              }}
            />
          </PaymentContainer>
        </form>
      </FormContainer>

      <CartContainer>
        <Title>Cafés selecionados</Title>
        <CartContent>
          <div className="scroll-coffee">
            {cartItems &&
              cartItems.map((cart) => (
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
                        <ButtonRemove
                          onClick={() => removeCoffeeToCart(cart.id)}
                        >
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

          {cartItems.length <= 0 && (
            <EmptyCart to="/">
              <FaCartPlus size={84} />
              <p>Carrinho vazio, clique para voltar a página inicial</p>
            </EmptyCart>
          )}

          {cartItems.length !== 0 && (
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
          )}

          <CheckoutButton
            disabled={cartItems.length === 0 || isSubmitting || inputsDisabled}
            type="submit"
            form="order"
          >
            Confirmar pedido
          </CheckoutButton>
        </CartContent>
      </CartContainer>
    </CheckoutContainer>
  );
}
