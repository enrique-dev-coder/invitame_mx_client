const DEV_API_URL = 'http://localhost:8000';

export const httpGetAllUsers = async () => {
  const response = await fetch(`${DEV_API_URL}/administration/users`);
  return await response.json();
};
