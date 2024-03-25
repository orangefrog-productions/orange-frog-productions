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
  return (
    <div className="menu-links-item">
      <li>
        <a
          onMouseEnter={(e) => {
            handlePage(bgImg);
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
