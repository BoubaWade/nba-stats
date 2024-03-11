type PlayersStarsProps = {
  className: string;
  stars: { name: string }[];
};

export default function PlayersStars({ className, stars }: PlayersStarsProps) {
  return (
    <div className={className}>
      {stars.map(({ name }) => (
        <img
          key={name}
          src={`/images/starsImages/${name}.avif`}
          className="star-logo"
        />
      ))}
    </div>
  );
}
