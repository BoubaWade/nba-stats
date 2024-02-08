import "./logoAndName.css";
type LogoAndNameProps = {
  className: string;
  src: string;
  name: string;
  classNameImage?: string;
  classNameName?: string;
};

export default function LogoAndName({
  className,
  classNameImage,
  classNameName,
  src,
  name,
}: LogoAndNameProps) {
  return (
    <div className={className}>
      <img className={classNameImage} src={src} />
      <span className={classNameName}>{name}</span>
    </div>
  );
}
