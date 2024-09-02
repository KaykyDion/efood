import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import hiokiSushi from "../../assets/images/hioki-sushi.png";
import productImg from "../../assets/images/product.png";
import ProductsContainer from "../../containers/ProductsContainer";
import Product from "../../models/Product";

export default function RestaurantPage() {
  const products = [
    new Product(
      "Pizza Marguerita",
      productImg,
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
      1234
    ),
    new Product(
      "Pizza Marguerita",
      productImg,
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
      1235
    ),
    new Product(
      "Pizza Marguerita",
      productImg,
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
      1236
    ),
    new Product(
      "Pizza Marguerita",
      productImg,
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
      1237
    ),
    new Product(
      "Pizza Marguerita",
      productImg,
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
      1238
    ),
    new Product(
      "Pizza Marguerita",
      productImg,
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
      1239
    ),
  ];
  return (
    <>
      <Header />
      <Banner region="Japonesa" title="Hioki Sushi" bannerImg={hiokiSushi} />
      <ProductsContainer products={products} />
      <Footer />
    </>
  );
}
