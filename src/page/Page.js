import React, { Fragment } from "react";
import SearchUser from "../components/SearchUser";
import Suggestion from "../components/Suggestion";
import Error from "../components/Error";
import Loading from "../components/Loading";

const Page = () => {
  return (
    <Fragment>
      <SearchUser />
      <Suggestion />
    </Fragment>
  );
};

export default Page;
