import { useCallback, useState } from "react";
import { SearchProps } from "./props";

const Search = ({ onSearch, searchTerm, value }: SearchProps) => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      onSearch(value);
    },
    [onSearch],
  );

  return <input type='text' placeholder={searchTerm} value={value} onChange={handleChange} />;
};

export default Search;
