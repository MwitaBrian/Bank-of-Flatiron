import React from "react";

function Search({ search, onSearchTransaction }) {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        value={search}
        onChange={(event) => onSearchTransaction(event.target.value)}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
