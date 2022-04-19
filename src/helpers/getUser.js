const getUser = (data) => {
  const { avatar_url, login, name, html_url } = data;
  const userInfo = {
    avatar: avatar_url,
    loginName: login,
    userName: name,
    profileLink: html_url,
  };

  return userInfo;
};
export default getUser;
