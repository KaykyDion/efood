class Restaurant {
  title: string;
  img: string;
  score: number;
  description: string;
  tags: string[];

  constructor(
    title: string,
    img: string,
    score: number,
    description: string,
    tags: string[]
  ) {
    this.title = title;
    this.img = img;
    this.score = score;
    this.description = description;
    this.tags = tags;
  }
}

export default Restaurant;
