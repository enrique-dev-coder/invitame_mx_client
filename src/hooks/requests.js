const DEV_API_URL = process.env.REACT_APP_DEV_API_URL;

export const httpGetAllUsers = async () => {
  const response = await fetch(`${DEV_API_URL}administration/users`);
  return await response.json();
};

export const httpPostUser = async (data) => {
  return await fetch(`${DEV_API_URL}administration/user`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
};
