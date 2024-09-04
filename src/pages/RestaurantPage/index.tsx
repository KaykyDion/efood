import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductsContainer from "../../containers/ProductsContainer";
import { useParams } from "react-router-dom";
import { useGetRestaurantQuery } from "../../services/api";

export default function RestaurantPage() {
  const { restaurantId } = useParams();

  const { data: restaurant } = useGetRestaurantQuery(restaurantId!);

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
