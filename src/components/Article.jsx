import { Link, Outlet, useLocation } from "react-router-dom";

function Article() {
  const location = useLocation();

  const isFrontend = location.pathname.includes("frontend");
  const isBackend = location.pathname.includes("backend");

  return (
    <div>
      {isFrontend || isBackend ? (
        <Outlet />
      ) : (
        <div>
          <h2>Main Articles</h2>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <button>
              <Link to="frontend">FrontEnd</Link>
            </button>
            <button>
              <Link to="backend">BackEnd</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Article;
