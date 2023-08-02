const DEV_API_URL = process.env.REACT_APP_DEV_API_URL;

export const httpGetAllUsers = async () => {
  const response = await fetch(`${DEV_API_URL}administration/users`);
  return await response.json();
};
