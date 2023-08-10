// import dashboard from './dashboard';
// import pages from './pages';
// import utilities from './utilities';
import other from './other';
import guests from './guests';
import admin from './admin';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  // DEFAULT THEME
  // items: [ dashboard, pages, utilities, other]
  userItems: [guests, other],
  adminItems: [admin]
};

export default menuItems;
