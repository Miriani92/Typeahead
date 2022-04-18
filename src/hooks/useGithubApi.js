import React from "react";
import { useReducer, useState, useEffect, useCallback } from "react";

const URL = "https://api.github.com/users/";
let initialstate = {
  users: [],
  isLoading: false,
  isError: false,
};
const githubUsersReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      state = { ...state, isLoading: action.payload };
      break;
  }
  return initialstate;
};

const useGithubApi = () => {
  const [githubUsers, dispatchGithubUsers] = useReducer(
    githubUsersReducer,
    initialstate
  );

  const [searchUsersByName, setSearchUsersByName] = useState("");

  const fetchFromGithub = useCallback(async () => {
    dispatchGithubUsers({ type: "LOADING", payload: true });
    try {
      const response = await fetch(`${URL}${"Miriani92"}`);
      const data = await response.json();
      if (response.ok) {
        console.log(data);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  }, [searchUsersByName]);
  useEffect(() => {
    fetchFromGithub();
  }, [URL, searchUsersByName]);
  return { setSearchUsersByName, searchUsersByName };
};

export default useGithubApi;
