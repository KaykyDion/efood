class Product {
  title: string;
  img: string;
  description: string;
  id: number;

  constructor(title: string, img: string, description: string, id: number) {
    this.title = title;
    this.img = img;
    this.description = description;
    this.id = id;
  }
}

export default Product;
