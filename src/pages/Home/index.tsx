import { useSelector } from "react-redux";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import RestaurantContainer from "../../containers/RestaurantContainers";
import { useGetAllRestaurantsQuery } from "../../services/api";
import { RootReducer } from "../../store";
import hiddenBodyScroll from "../../utils/hiddenOverflow";
import Loader from "../../components/Loader";

export default function Home() {
  const { data: restaurants, isLoading } = useGetAllRestaurantsQuery();
  const { isOpen } = useSelector((state: RootReducer) => state.cart);

  hiddenBodyScroll(isOpen);

  return (
    <>
      <Hero />
      <main className="container">
        {isLoading ? (
          <Loader />
        ) : (
          restaurants && <RestaurantContainer restaurantList={restaurants} />
        )}
      </main>
      <Footer />
    </>
  );
}
