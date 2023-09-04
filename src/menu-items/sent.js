// assets
import EmailIcon from '@mui/icons-material/Email'; // constant

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const sent = {
  id: 'sent',
  type: 'group',
  children: [
    {
      id: 'sent',
      title: 'Enviar',
      type: 'item',
      url: '/enviar',
      icon: EmailIcon,
      breadcrumbs: false
    }
  ]
};

export default sent;
