import { React } from "seismic-vendors";
import { Component } from "toolkit";
import "./content-manager.css"

// This lazy-loaded module is not an external and will generate a separate chunk.
import("./lazyLoadedUtil").then(({ util }) => console.log({ lazyLoadedUtil: util }));
// This lazy-loaded module IS an external module and the syntax will be transformed at build-time.
import("toolkit").then((toolkitModule) => console.log({ toolkitModule }));

export default function ContentManager() {
  return React.createElement("div", { className: "container" },
    React.createElement("h2", {}, "Content Manager"),
    React.createElement(Component)
  );
}
