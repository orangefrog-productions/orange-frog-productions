import "./projectList.scss";

const ProjectList = ({ projects }) => {
  let rowCount = 0;
  let classListEven = ["projects-item-small", "projects-item-big"];
  let classListOdd = ["projects-item-big", "projects-item-small"];
  const classProjects = projects.map((item, index) => {
    if (rowCount % 2 === 0) {
      if (index !== 0 && index % 2 !== 0) {
        rowCount = rowCount + 1;
      }
      return { ...item, className: classListOdd[index % 2] };
    } else {
      if (index % 2 !== 0) {
        rowCount = rowCount + 1;
      }
      return { ...item, className: classListEven[index % 2] };
    }
  });

  return (
    <div className="projects">
      <div className="projects-wrapper">
        {classProjects.map((proj, index) => {
          return (
            <div key={index} className={`projects-item ${proj.className}`}>
              <a
                className="projects-item-wrap"
                href={`/portfolio/${proj.slug}`}
              >
                <div className="projects-item-image">
                  <img
                    src={proj.projects.featuredImage.sourceUrl}
                    alt={proj.projects.featuredImage.altText}
                    width="1500"
                    height="1000"
                  />
                </div>
                <div className="projects-item-title">
                  <h3>{proj.title}</h3>
                  {/* <p>{proj.projects.projectCategory}</p> */}
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectList;
