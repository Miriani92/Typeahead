import React, { useRef, useEffect } from "react";
import styles from "./Searchuser.module.css";
import { useGithubUserContext } from "../context/githubUserContext";

const SearchUser = () => {
  const inputRef = useRef(null);
  const { setSearchUsersByName, searchUsersByName } = useGithubUserContext();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const submitName = (e) => {
    e.preventDefault();
    setSearchUsersByName("");
  };
  return (
    <form onSubmit={submitName}>
      <label htmlFor="name"></label>
      <input
        className={styles.input}
        type="text"
        id="name"
        value={searchUsersByName}
        ref={inputRef}
        onChange={(e) => setSearchUsersByName(e.target.value)}
        placeholder="Type Name"
        required
      />
    </form>
  );
};

export default SearchUser;
