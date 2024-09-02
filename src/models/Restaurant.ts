class Restaurant {
  title: string;
  img: string;
  score: number;
  description: string;
  tags: string[];
  id: number;

  constructor(
    title: string,
    img: string,
    score: number,
    description: string,
    tags: string[],
    id: number
  ) {
    this.title = title;
    this.img = img;
    this.score = score;
    this.description = description;
    this.tags = tags;
    this.id = id;
  }
}

export default Restaurant;
