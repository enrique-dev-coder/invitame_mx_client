// assets
import CelebrationIcon from '@mui/icons-material/Celebration';
// constant

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const guest = {
  id: 'guests',
  type: 'group',
  children: [
    {
      id: 'invitados',
      title: 'Invitados',
      type: 'item',
      url: '/invitados',
      icon: CelebrationIcon,
      breadcrumbs: false
    }
  ]
};

export default guest;
