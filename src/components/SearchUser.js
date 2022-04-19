import React from "react";

const SearchUser = () => {
  const submitName = (e) => {
    e.preventDefault();
    setSearchUsersByName("");
  };
  return (
    <form onSubmit={submitName}>
      <label htmlFor="name">Github Users:</label>
      <input
        type="text"
        id="name"
        value={searchUsersByName}
        onChange={(e) => setSearchUsersByName(e.target.value)}
        placeholder="Type Name"
        required
      />
    </form>
  );
};

export default SearchUser;
