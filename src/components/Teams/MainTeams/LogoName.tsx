type LogoNameProps = {
  name: string;
  full_name: string;
};

export default function LogoName({ name, full_name }: LogoNameProps) {
  return (
    <>
      <img src={`/images/teamsLogos/${name}.svg`} />
      <span className="name">{full_name}</span>
    </>
  );
}
