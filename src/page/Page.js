import React, { Fragment } from "react";
import SearchUser from "../components/SearchUser";
import Suggestion from "../components/Suggestion";
import Error from "../components/Error";
import Loading from "../components/Loading";
import useGithubApi from "../hooks/useGithubApi";

const Page = () => {
  const { githubUsers } = useGithubApi();
  return (
    <Fragment>
      <SearchUser />
      <Suggestion user={githubUsers} />
    </Fragment>
  );
};

export default Page;
