import { useCallback } from "react";
import { SearchProps } from "./props";

const Search = ({ onSearch, searchTerm, value }: SearchProps) => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      onSearch(value);
    },
    [onSearch],
  );

  return (
    <input
      type='text'
      placeholder={searchTerm}
      value={value}
      onChange={handleChange}
      className='border-2 border-gray-300 rounded-md p-2'
    />
  );
};

export default Search;
