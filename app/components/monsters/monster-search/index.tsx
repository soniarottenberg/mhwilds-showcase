import { useMonsterStore } from "../../../store/monster-search-store";
import Search from "../../ui/search";

const MonsterSearch = () => {
  const { searchTerm, setSearchTerm } = useMonsterStore();

  return <Search searchTerm='Search monsters...' onSearch={setSearchTerm} value={searchTerm} />;
};

export default MonsterSearch;
