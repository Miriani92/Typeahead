import React from "react";
const Suggestion = ({ user }) => {
  const { avatar, profileLink, userName, loginName } = user;
  return (
    <div>
      <a href={profileLink} target="_blank">
        <img src={avatar} alt="avatar"></img>
        <p>{userName}</p>
        <p>{loginName}</p>
      </a>
    </div>
  );
};

export default Suggestion;
