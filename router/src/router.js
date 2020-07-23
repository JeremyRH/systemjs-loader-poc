import { React, ReactDOM } from "seismic-vendors";
import Search from "search";
import useRoutes from "./useRoutes";

// React.lazy and dynamic import allows us to lazy load external bundles.
// This is transformed at build-time to use SystemJS.import (browser) or require (node).
// SystemJS uses the import map to fetch bare import specifiers (e.g. "content-manager").
const LazyContentManager = React.lazy(() => import("content-manager"));
const LazyDocCenter = React.lazy(() => import("doc-center"));

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
