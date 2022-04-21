import React, {
  useState,
  useContext,
  useEffect,
  useReducer,
  useCallback,
} from "react";
import getUser from "../helpers/getUser";
import { githubUsersReducer } from "./reducer";

const GithubUserContext = React.createContext();
const URL = "https://api.github.com/users/";
let initialstate = {
  users: {},
  isLoading: false,
  error: { isError: false, message: "" },
};

const GithubUserProvider = ({ children }) => {
  const [searchUsersByName, setSearchUsersByName] = useState("");
  const [githubUsers, dispatchGithubUsers] = useReducer(
    githubUsersReducer,
    initialstate
  );

  const fetchFromGithub = useCallback(async () => {
    dispatchGithubUsers({ type: "LOADING" });
    try {
      const response = await fetch(`${URL}${searchUsersByName}`);
      if (!response.ok) {
        throw Error("No users found with this name");
      }
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
    const id = setTimeout(() => {
      if (searchUsersByName) {
        fetchFromGithub();
      }
    }, 500);
    return () => clearTimeout(id);
  }, [searchUsersByName]);

  return (
    <GithubUserContext.Provider
      value={{ searchUsersByName, setSearchUsersByName, githubUsers }}
    >
      {children}
    </GithubUserContext.Provider>
  );
};
export const useGithubUserContext = () => {
  return useContext(GithubUserContext);
};

export { GithubUserContext, GithubUserProvider };
