import { BannerContainer } from "./styles";

type Props = {
  region: string;
  title: string;
  bannerImg: string;
};

export default function Banner({ region, title, bannerImg }: Props) {
  return (
    <BannerContainer style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="container">
        <h2>{region}</h2>
        <h1>{title}</h1>
      </div>
    </BannerContainer>
  );
}
