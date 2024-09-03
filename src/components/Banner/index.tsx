import { BannerContainer } from "./styles";

type Props = {
  type: string;
  title: string;
  bannerImg: string;
};

export default function Banner({ type, title, bannerImg }: Props) {
  return (
    <BannerContainer style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="container">
        <h2>{type}</h2>
        <h1>{title}</h1>
      </div>
    </BannerContainer>
  );
}
