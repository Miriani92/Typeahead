import React, { Fragment } from "react";
import SearchUser from "../components/SearchUser";
import Suggestion from "../components/Suggestion";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { useGithubUserContext } from "../context/githubUserContext";

const Page = () => {
  const { githubUsers, searchUsersByName } = useGithubUserContext();
  const renderSuggestion = searchUsersByName.length > 0 && !githubUsers.isError;
  console.log(searchUsersByName);

  return (
    <Fragment>
      <SearchUser />
      {renderSuggestion && <Suggestion user={githubUsers.users} />}
    </Fragment>
  );
};

export default Page;
