import "./logoAndName.css";
const getLogoPATH = (name: string) => {
  return ` ../../../../public/images/${name}.svg`;
};
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
      <img className={classNameImage} src={getLogoPATH(name)} />
      <span className={classNameName}>{name}</span>
    </div>
  );
}
