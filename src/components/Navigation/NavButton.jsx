import "./navButton.scss";

const NavButton = ({ setIsOpen, btnChecked, setBtnChecked }) => {
  const handleCheckbox = (event) => {
    if (event.target.checked) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <div className="menu-button">
      <label htmlFor="menu-button" className="hamburger-menu">
        <input
          type="checkbox"
          name="menu-button"
          id="menu-button"
          onChange={() => {
            setBtnChecked(!btnChecked);
            handleCheckbox(event);
          }}
          checked={btnChecked}
        />
      </label>
    </div>
  );
};

export default NavButton;
