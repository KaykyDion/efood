import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import RestaurantContainer from "../../containers/RestaurantContainers";
import Restaurant from "../../models/Restaurant";

export default function Home() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes")
      .then((res) => res.json())
      .then((res) => setRestaurants(res));
  }, []);

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
