type ImagePath = {
  src: string;
};
type ImagesProps = {
  imagesFields: ImagePath[];
};

export default function Images({ imagesFields }: ImagesProps) {
  return (
    <>
      {imagesFields.map(({ src }, index) => (
        <img key={index} src={src} style={{ width: "100px" }} />
      ))}
    </>
  );
}
