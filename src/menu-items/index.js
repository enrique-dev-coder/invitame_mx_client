// import dashboard from './dashboard';
// import pages from './pages';
// import utilities from './utilities';
import guests from './guests';
import admin from './admin';
import sent from './sent';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  // DEFAULT THEME
  // items: [ dashboard, pages, utilities, other]
  userItems: [sent, guests],
  adminItems: [admin, sent]
};

export default menuItems;
