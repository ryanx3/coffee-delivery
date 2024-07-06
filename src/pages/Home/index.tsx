import { useState, useEffect } from "react";
import { Card, CardCoffee } from "../../components/Card";
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
  const [coffee, setCoffee] = useState<CardCoffee[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    async function fetchCoffee() {
      const response = await api.get(`/coffee`);
      const dataResponse: CardCoffee[] = response.data;
      setCoffee(dataResponse);

      const uniqueTags = [
        ...new Set(
          dataResponse.flatMap((coffeeItem: CardCoffee) => coffeeItem.tags)
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
