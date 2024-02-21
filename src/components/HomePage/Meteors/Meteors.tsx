import "./meteors.css";

export default function Meteors() {
  const number = 50;
  const meteors = new Array(number).fill(true);
  return (
    <>
      {meteors.map((_, index) => (
        <span
          key={"meteor" + index}
          className="meteors"
          style={{
            top: 0,
            left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
          }}
        ></span>
      ))}
    </>
  );
}
