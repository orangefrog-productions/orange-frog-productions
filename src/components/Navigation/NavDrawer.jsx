import "./navDrawer.scss";

const NavDrawer = ({ isOpen, origin }) => {
  return (
    <div className={`nav-drawer ${isOpen ? "active" : ""}`}>
      <div className="main-nav-wrapper"></div>
    </div>
  );
};

export default NavDrawer;
