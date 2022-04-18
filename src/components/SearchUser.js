import React from "react";
import useGithubApi from "../hooks/useGithubApi";

const SearchUser = () => {
  const { setSearchUsersByName, searchUsersByName } = useGithubApi();
  const submitName = (e) => {
    e.preventDefault();
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
