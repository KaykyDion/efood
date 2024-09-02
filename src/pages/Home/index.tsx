import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import RestaurantContainer from "../../containers/RestaurantContainers";
import Restaurant from "../../models/Restaurant";
import hiokiSushi from "../../assets/images/hioki-sushi.png";

export default function Home() {
  const restaurants = [
    new Restaurant(
      "Hioki Sushi",
      hiokiSushi,
      4.9,
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
      ["Destaque da semana", "Japonesa"],
      1234
    ),
    new Restaurant(
      "Hioki Sushi",
      hiokiSushi,
      4.9,
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
      ["Destaque da semana", "Japonesa"],
      1235
    ),
    new Restaurant(
      "Hioki Sushi",
      hiokiSushi,
      4.9,
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
      ["Destaque da semana", "Japonesa"],
      1236
    ),
    new Restaurant(
      "Hioki Sushi",
      hiokiSushi,
      4.9,
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
      ["Destaque da semana", "Japonesa"],
      1237
    ),
    new Restaurant(
      "Hioki Sushi",
      hiokiSushi,
      4.9,
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
      ["Destaque da semana", "Japonesa"],
      1238
    ),
    new Restaurant(
      "Hioki Sushi",
      hiokiSushi,
      4.9,
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
      ["Destaque da semana", "Japonesa"],
      1239
    ),
  ];

  return (
    <>
      <Hero />
      <main className="container">
        <RestaurantContainer restaurantList={restaurants} />
      </main>
      <Footer />
    </>
  );
}
