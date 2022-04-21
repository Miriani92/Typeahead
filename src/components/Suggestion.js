import React, { Fragment } from "react";
import styles from "./Suggestion.module.css";
const Suggestion = ({ user }) => {
  const { avatar, profileLink, userName, loginName } = user;
  const emptyUserField = Object.keys(user).length === 0;
  return (
    <Fragment>
      {!emptyUserField && (
        <div>
          <a
            href={profileLink}
            target="_blank"
            className={styles.suggestionWrapper}
          >
            <img src={avatar} alt="avatar"></img>
            <p>{userName}</p>
            <p>{loginName}</p>
          </a>
        </div>
      )}
    </Fragment>
  );
};

export default Suggestion;
