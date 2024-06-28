import { Card } from "../../components/Card";
import { Tag } from "../../components/Tag";
import { HeroSection } from "./components/HeroSection";

import { CardWrapper, HomeContainer, ContentSection } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <HeroSection />
      <main>
        <ContentSection>
          <header>
            <h2>Nossos cafés</h2>
            <div>
              <Tag>Tradicionais</Tag>
              <Tag>Tradicionais</Tag>
              <Tag>Tradicionais</Tag>
            </div>
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
      </main>
    </HomeContainer>
  );
}
