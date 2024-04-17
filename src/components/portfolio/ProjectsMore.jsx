import { useState } from "react";
import ProjectList from "./ProjectList.jsx";
import "./projectsMore.scss";

const ProjectsMore = ({ total, current }) => {
  const [profolioState, setPortfolioState] = useState({
    current: current,
    total: total,
    projectsDisplay: [],
    loadingMore: false,
  });

  const handleGetMorePortfolio = async () => {
    setPortfolioState((prevState) => {
      return {
        ...prevState,
        loadingMore: true,
      };
    });
    const response = await fetch(
      `https://orangefrog.swbdatabases3.com/graphql`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          query: `
              query morePortfolioQuery {
                  nextProjects: project(where: {offsetPagination: {offset: ${profolioState.current}, size: 2}}) {
                    nodes {
                          title
                          slug
                          projects {
                              projectCategory
                              featuredImage {
                                  sourceUrl
                                  altText
                              }
                          }
                      }
                      pageInfo {
                      offsetPagination {
                        total
                      }
                    }
                  }
      
              }
              `,
        }),
      },
    );

    const {
      data: { nextProjects },
    } = await response.json();

    setPortfolioState((prevState) => {
      return {
        ...prevState,
        current: prevState.current + nextProjects.nodes.length,
        projectsDisplay: [...prevState.projectsDisplay, ...nextProjects.nodes],
        loadingMore: false,
      };
    });

    console.log("nextProjects: ", nextProjects);
  };

  console.log("profolioState: ", profolioState);

  return (
    <div className="projects-more">
      {profolioState.projectsDisplay.length > 0 && (
        <ProjectList projects={profolioState.projectsDisplay} />
      )}
      <div className="projects-more-wrapper">
        {profolioState.loadingMore && <h1>Loading.....</h1>}
        <button
          disabled={profolioState.current >= profolioState.total}
          type="button"
          onClick={() => {
            handleGetMorePortfolio();
          }}
        >
          Load More Projects
        </button>
      </div>
    </div>
  );
};

export default ProjectsMore;
