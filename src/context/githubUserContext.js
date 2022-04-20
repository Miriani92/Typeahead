import React, {
  useState,
  useContext,
  useEffect,
  useReducer,
  useCallback,
} from "react";
import getUser from "../helpers/getUser";

const GithubUserContext = React.createContext();
const URL = "https://api.github.com/users/";
let initialstate = {
  users: {},
  isLoading: false,
  error: { isError: false, message: "" },
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
        error: { isError: false, message: "" },
      });
    case "ERROR":
      return (state = {
        ...state,
        isLoading: false,
        error: { isError: true, message: action.payload },
      });
    default:
      return initialstate;
  }
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
  console.log(githubUsers.users);
  useEffect(() => {
    const id = setTimeout(() => {
      if (searchUsersByName) {
        fetchFromGithub();
      }
    }, 1000);
    return () => clearTimeout(id);
  }, [URL, searchUsersByName]);

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
