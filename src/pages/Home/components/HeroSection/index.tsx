import { useTheme } from "styled-components";

import {
  PiShoppingCartFill,
  PiPackageFill,
  PiTimerFill,
  PiCoffeeFill,
} from "react-icons/pi";

import HeroImage from "../../../../assets/hero-img.png";
import HeroBackground from "../../../../assets/bg-hero.png";
import { HeroContainer, Content, Title, Items } from "./styles";

export function HeroSection() {
  const theme = useTheme();

  return (
    <HeroContainer>

      <img src={HeroBackground} className="hero-bg" alt="" />

      <Content>
        <div>
          <Title>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>

            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </Title>

          <Items>
            <div>
              <PiShoppingCartFill
                size={32}
                color={theme.colors.background}
                style={{ backgroundColor: theme.colors["yellow-dark"] }}
              />
              <span>Compra simples e segura</span>
            </div>

            <div>
              <PiPackageFill
                size={32}
                color={theme.colors.background}
                style={{ backgroundColor: theme.colors["base-text"] }}
              />
              <span>Embalagem mantém o café intacto</span>
            </div>

            <div>
              <PiTimerFill
                size={32}
                color={theme.colors.background}
                style={{ backgroundColor: theme.colors.yellow }}
              />
              <span>Entrega rápida e rastreada</span>
            </div>

            <div>
              <PiCoffeeFill
                size={32}
                color={theme.colors.background}
                style={{ backgroundColor: theme.colors.purple }}
              />
              <span>O café chega fresquinho até você</span>
            </div>
          </Items>
        </div>

        <img src={HeroImage} alt="Café do Coffee Delivery" />
      </Content>
    </HeroContainer>
  );
}
