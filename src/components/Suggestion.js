import React from "react";
const Suggestion = ({ user }) => {
  const { avatar, loginName, userName, profileLink } = user.users;
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
