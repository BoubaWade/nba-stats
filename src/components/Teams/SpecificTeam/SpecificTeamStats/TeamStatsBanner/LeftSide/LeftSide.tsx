import BalanceSheet from "./BalanceSheet";
import LogoImage from "./LogoImage";

export default function LeftSide() {
  return (
    <div className="left-side-team-stats-banner">
      <LogoImage />
      <BalanceSheet />
    </div>
  );
}
