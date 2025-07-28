import "../styles/Header.CSS";

function Header({ search, setSearch, sendSearch }) {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="header">
      <a href="http://localhost:3000/"></a>

      <h1>Sucrose Chef</h1>
      <div className="search">
        <input
          value={search}
          onChange={handleChange}
          type="text"
          placeholder="Search..."
        />
        <button className="search-button" onClick={sendSearch}>
          Go
        </button>
      </div>
    </div>
  );
}

export default Header;
