const SearchBox = ({ placeholder, searchHandler }) => {
  return (
    <input type="search" placeholder={placeholder} onChange={searchHandler} />
  );
};

export default SearchBox;
