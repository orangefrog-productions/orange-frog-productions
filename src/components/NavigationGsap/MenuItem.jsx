import "./menuItem.scss";

const MenuItem = ({
  href,
  title,
  handlePage,
  handleHover,
  handleHoverExit,
  handlePageReturn,
  bgImg,
  subMenu,
}) => {
  console.log("subMenu", subMenu);
  console.log("bgImg", bgImg);
  return (
    <div className="menu-links-item">
      <li>
        <a
          onMouseEnter={(e) => {
            handlePage(bgImg ? bgImg.src : null);
            handleHover(e);
          }}
          onMouseOut={(e) => {
            handleHoverExit(e);
            handlePageReturn();
          }}
          href={href}
        >
          {title}
        </a>
      </li>
    </div>
  );
};

export default MenuItem;
