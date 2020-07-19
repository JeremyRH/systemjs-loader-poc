import { React } from "seismic-vendors";
import { Component } from "toolkit";

export default function ContentManager() {
  return React.createElement("div", {},
    React.createElement("h2", {}, "Content Manager"),
    React.createElement(Component)
  );
}
