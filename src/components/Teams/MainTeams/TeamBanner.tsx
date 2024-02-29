type TeamBannerProps = {
  name: string;
};
export default function TeamBanner({ name }: TeamBannerProps) {
  return (
    <img src={`/public/images/teamsBanners/${name}.png`} className="face" />
  );
}
