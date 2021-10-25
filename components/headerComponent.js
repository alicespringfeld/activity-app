import { createElement } from "./elements.js";

export function createHeaderComponent() {
  const headerElement = createElement("header", { className: "header" }, [
    createElement("img", {
      src: "assets/pexels-photo-3764319.jpeg",
    }),

    /*createSearchBarComponent(),*/
  ]);

  return headerElement;
}
