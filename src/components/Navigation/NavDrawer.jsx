import "./navDrawer.scss";

const NavDrawer = ({ isOpen, origin }) => {
  return (
    <div className={`nav-drawer ${isOpen ? "active" : ""}`}>
      <div className="nav-drawer-secondary-background-color"></div>
      <div className="menu-layer">
        <div className="main-nav-wrapper"></div>
      </div>
    </div>
  );
};

export default NavDrawer;
