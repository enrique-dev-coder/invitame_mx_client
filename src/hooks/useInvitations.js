import { useState, useEffect, useCallback } from 'react';
import { httpGetAllInvitations, httpGetInviteGuests } from './requests.js';
import { useSelector } from 'react-redux';

const useInvitations = () => {
  const [singleInvitation, setSingleInvitation] = useState([]);
  const user = useSelector((state) => state.auth.user);

  const getInvitations = async () => {
    const data = await httpGetAllInvitations();
    return data;
  };

  const getSingleInvitationData = useCallback(async (invitationName) => {
    const data = await httpGetInviteGuests(invitationName);
    setSingleInvitation(data);
  }, []);

  useEffect(() => {
    getSingleInvitationData(user.invitation);
  }, [getSingleInvitationData]);

  return { getInvitations, singleInvitation };
};

export default useInvitations;
