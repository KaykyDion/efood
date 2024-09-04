import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import RestaurantContainer from "../../containers/RestaurantContainers";
import { useGetAllRestaurantsQuery } from "../../services/api";

export default function Home() {
  const { data: restaurants, isLoading } = useGetAllRestaurantsQuery();

  return (
    <>
      <Hero />
      <main className="container">
        {isLoading ? (
          <h2>Carregando...</h2>
        ) : (
          restaurants && <RestaurantContainer restaurantList={restaurants} />
        )}
      </main>
      <Footer />
    </>
  );
}
