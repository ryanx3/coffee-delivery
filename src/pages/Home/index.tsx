import { Card } from "../../components/Card";
import { HeroSection } from "./components/HeroSection";

import { CardWrapper, HomeContainer, ContentSection, TagSearchContainer, TagSearchButton } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <HeroSection />
      <ContentSection>
        <header>
          <h2>Nossos cafés</h2>
          <TagSearchContainer>
            <TagSearchButton value="Tradicionais" >
              Tradicionais
            </TagSearchButton>
            <TagSearchButton value="Gelado">
              Gelado
            </TagSearchButton>
            <TagSearchButton value="Com leite" >
              Com leite
            </TagSearchButton>
          </TagSearchContainer>
        </header>

        <CardWrapper>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardWrapper>
      </ContentSection>
    </HomeContainer>
  );
}
