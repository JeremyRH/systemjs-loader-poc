import { React, ReactDOM } from "seismic-vendors";
import Search from "search";
import useRoutes from "./useRoutes";

// React.lazy and SystemJS.import allows us to dynamically import an external bundle.
// The import map allows us to use bare import specifiers (e.g. "content-manager")
// instead of a URL.
const LazyContentManager = React.lazy(() => SystemJS.import("content-manager"));
const LazyDocCenter = React.lazy(() => SystemJS.import("doc-center"));

const routes = {
  "#/content-manager": LazyContentManager,
  "#/doc-center": LazyDocCenter,
};

// Default page if no routes match.
function HomePage() {
  return React.createElement("h2", {}, "Home Page")
}

function App() {
  const RouteElement = useRoutes(routes);

  return React.createElement(React.Suspense, { fallback: "Loading..."},
    React.createElement(Search),
    React.createElement(RouteElement || HomePage)
  );
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
