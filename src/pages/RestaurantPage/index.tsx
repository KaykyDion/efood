import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductsContainer from "../../containers/ProductsContainer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Restaurant from "../../models/Restaurant";

export default function RestaurantPage() {
  const [restaurant, setRestaurant] = useState<Restaurant>();
  const { restaurantId } = useParams();

  useEffect(() => {
    fetch(
      `https://fake-api-tau.vercel.app/api/efood/restaurantes/${restaurantId}`
    )
      .then((res) => res.json())
      .then((res) => setRestaurant(res));
  }, [restaurantId]);
  return (
    <>
      <Header />
      {restaurant && (
        <main>
          <Banner
            type={restaurant.tipo}
            title={restaurant.titulo}
            bannerImg={restaurant.capa}
          />
          {restaurant.cardapio && (
            <ProductsContainer products={restaurant.cardapio} />
          )}
        </main>
      )}
      <Footer />
    </>
  );
}
