import React, { useReducer, useState, useEffect, useCallback } from "react";
import getUser from "../helpers/getUser";

const URL = "https://api.github.com/users/";
let initialstate = {
  users: {},
  isLoading: false,
  isError: false,
};
const githubUsersReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return (state = { ...state, isLoading: true });

    case "USER":
      return (state = {
        ...state,
        isLoading: false,
        users: { ...action.payload },
      });
    case "ERROR":
      return (state = { ...state, isLoading: false, isError: true });
    default:
      return initialstate;
  }
};

const useGithubApi = () => {
  const [githubUsers, dispatchGithubUsers] = useReducer(
    githubUsersReducer,
    initialstate
  );

  const [searchUsersByName, setSearchUsersByName] = useState();

  const fetchFromGithub = useCallback(async () => {
    dispatchGithubUsers({ type: "LOADING" });
    try {
      const response = await fetch(`${URL}${"gaearon"}`);

      if (response.status >= 200 && response.status <= 299) {
        const data = await response.json();
        const userInfo = getUser(data);
        dispatchGithubUsers({ type: "USER", payload: userInfo });
      } else {
        throw Error(response.statusText);
      }
    } catch (error) {
      dispatchGithubUsers({ type: "ERROR", payload: error.message });
    }
  }, [searchUsersByName]);
  useEffect(() => {
    fetchFromGithub();
  }, [URL, searchUsersByName]);
  return { setSearchUsersByName, searchUsersByName, githubUsers };
};

export default useGithubApi;
