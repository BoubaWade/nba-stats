import "./logoAndName.css";
// const getLogoPATH = (name: string) => {
//   return `/public/images/teamsLogos/${name}.svg`;
// };
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
      <img
        className={classNameImage}
        src={`/public/images/teamsLogos/${name}.svg`}
      />
      <span className={classNameName}>{name}</span>
    </div>
  );
}
