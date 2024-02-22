import { Player } from "../../../../playersTypes";
import usePlayerInfos from "../../../../../../hooks/usePlayerInfos";
type PlayerInfosProps = {
  player: Player;
};

export default function PlayerInfos({ player }: PlayerInfosProps) {
  const { infosFields } = usePlayerInfos(player);

  return (
    <>
      {infosFields.map(({ id, onclick, label }) => (
        <td key={id} id={id} onClick={onclick}>
          {label}
        </td>
      ))}
    </>
  );
}
