import SearchForm from "./SearchForm/SearchForm";
import PlayersTable from "./PlayersTable/PlayersTable";
import NavigationMobile from "../../../reusable-ui/NavigationMobile.tsx/NavigationMobile";

export default function PrincipalContent() {
  return (
    <>
      <NavigationMobile />
      <SearchForm />
      <PlayersTable />
    </>
  );
}
