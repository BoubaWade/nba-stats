type TeamBannerProps = {
  name: string;
};
export default function TeamBanner({ name }: TeamBannerProps) {
  return <img src={`/images/teamsBanners/${name}.png`} className="face" />;
}
