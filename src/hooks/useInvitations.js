import { httpGetAllInvitations } from './requests.js';

const useInvitations = () => {
  const getInvitations = async () => {
    const data = await httpGetAllInvitations();
    return data;
  };

  return { getInvitations };
};

export default useInvitations;
