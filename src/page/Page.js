import React from "react";
import styles from "./Page.module.css";
import SearchUser from "../components/SearchUser";
import Suggestion from "../components/Suggestion";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { useGithubUserContext } from "../context/githubUserContext";

const Page = () => {
  const { githubUsers, searchUsersByName } = useGithubUserContext();
  const renderSuggestion =
    searchUsersByName.length > 0 && !githubUsers.error.isError;
  const showLoading = githubUsers.isLoading;
  return (
    <main className={styles.pageWrapper}>
      <SearchUser />
      {showLoading && <Loading />}
      {renderSuggestion ? (
        <Suggestion user={githubUsers.users} />
      ) : (
        <Error message={githubUsers.error.message} />
      )}
    </main>
  );
};

export default Page;
