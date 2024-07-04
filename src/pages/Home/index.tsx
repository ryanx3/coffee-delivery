import { useState, useEffect } from "react";
import { Card, CardType } from "../../components/Card";
import { HeroSection } from "./components/HeroSection";
import {
  CardWrapper,
  HomeContainer,
  ContentSection,
  TagSearchContainer,
  TagSearchButton,
} from "./styles";
import { api } from "../../services/api";

export function Home() {
  const [coffee, setCoffee] = useState<CardType[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    async function fetchCoffee() {
      const response = await api.get(
        `http://localhost:3333/coffee?tags=${tags}`
      );
      const dataResponse: CardType[] = response.data;
      setCoffee(dataResponse);

      const uniqueTags = [
        ...new Set(
          dataResponse.flatMap((coffeeItem: CardType) => coffeeItem.tags)
        ),
      ];
      setTags(uniqueTags);
    }
    fetchCoffee();
  }, [tags]);

  return (
    <HomeContainer>
      <HeroSection />
      <ContentSection>
        <header>
          <h2>Nossos cafés</h2>
          <TagSearchContainer>
            {tags.map((tag, index) => (
              <TagSearchButton key={index} value={tag}>
                {tag}
              </TagSearchButton>
            ))}
          </TagSearchContainer>
        </header>

        <CardWrapper>
          {coffee.map((data) => (
            <Card coffee={data} key={data.id} />
          ))}
        </CardWrapper>
      </ContentSection>
    </HomeContainer>
  );
}
