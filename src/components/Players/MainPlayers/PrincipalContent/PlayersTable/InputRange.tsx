import React, { useContext } from "react";
import { PlayersContext } from "../../../../../contexts/playersContext";

export default function InputRange() {
  const { rangeValue, setRangeValue } = useContext(PlayersContext);

  const handleChangeRangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRangeValue(parseInt(e.target.value));
  };
  return (
    <div className="input-range-container">
      <input
        className="input-range"
        type="range"
        value={rangeValue}
        onChange={handleChangeRangeValue}
      />
    </div>
  );
}
