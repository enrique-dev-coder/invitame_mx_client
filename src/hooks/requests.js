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

export const httpGetNewPasswordForUser = async () => {
  const response = await fetch(`${DEV_API_URL}administration/user/password`);
  return await response.json();
};

// invitations

export const httpGetAllInvitations = async () => {
  const response = await fetch(`${DEV_API_URL}invitations`);
  return await response.json();
};

// login

export const httpGetAuthToken = async (data) => {
  const token = await fetch(`${DEV_API_URL}auth/login`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return await token.json();
};

// guests
export const httpGetInviteGuests = async (invitation) => {
  const response = await fetch(`${DEV_API_URL}invitations/${invitation}`);
  return await response.json();
};

// upload csv

export const httpUploadCsv = async (file) => {
  const formData = new FormData();

  formData.append('csvFile', file);

  const response = await fetch(`${DEV_API_URL}invitations/guests`, {
    method: 'post',
    body: formData
  });

  return await response.json();
};
