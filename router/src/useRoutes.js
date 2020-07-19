import { React } from "seismic-vendors";

// Very simple hash router. We should use react-router instead of this.
export default function useRoutes(routes) {
  const [RouteElement, setRouteElement] = React.useState(routes[location.hash]);

  React.useEffect(() => {
    function onHashChange() {
      setRouteElement(routes[location.hash]);
    }
    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [routes]);

  return RouteElement;
}
