import { useState } from "react";
import ProjectList from "./ProjectList.jsx";
import "./projectsMore.scss";
import loadingSrc from "../Contact/assets/loading.gif";

const ProjectsMore = ({ total, current }) => {
  console.log("loadingSrc", loadingSrc);
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

    setTimeout(() => {
      setPortfolioState((prevState) => {
        return {
          ...prevState,
          current: prevState.current + nextProjects.nodes.length,
          projectsDisplay: [
            ...prevState.projectsDisplay,
            ...nextProjects.nodes,
          ],
          loadingMore: false,
        };
      });
    }, 1000);
  };

  return (
    <div className="projects-more">
      {profolioState.projectsDisplay.length > 0 && (
        <ProjectList projects={profolioState.projectsDisplay} />
      )}
      <div className="projects-more-wrapper">
        {profolioState.loadingMore && (
          <div className="projects-more-loading">
            <div className="projects-more-loading-image">
              <img
                src={loadingSrc.src}
                width={loadingSrc.width}
                height={loadingSrc.height}
                alt="loading...."
              />
            </div>
            <div className="projects-more-loading-message">
              <p>Loading More Projects.....</p>
            </div>
          </div>
        )}
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
