import "./logoAndName.css";

type LogoAndNameProps = {
  className: string;
  name: string;
  classNameImage?: string;
  classNameName?: string;
};

export default function LogoAndName({
  className,
  classNameImage,
  classNameName,
  name,
}: LogoAndNameProps) {
  return (
    <div className={className}>
      <img className={classNameImage} src={`/images/teamsLogos/${name}.svg`} />
      <span className={classNameName}>{name}</span>
    </div>
  );
}
