// assets
import { IconUsers } from '@tabler/icons';

// constant
const icons = { IconUsers };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const admin = {
  id: 'admin',
  title: 'Administration',
  type: 'group',
  children: [
    {
      id: 'usuarios',
      title: 'Usuarios',
      type: 'item',
      url: '/admin/usuarios',
      icon: icons.IconUsers,
      breadcrumbs: false
    }
  ]
};

export default admin;
