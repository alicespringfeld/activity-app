import { createElement } from "./elements.js";

export function createDropDownMenu() {
  const dropDownMenu = createElement("select", {
    id: "activitySelect",
    placeholder: "choose...",
  });

  return dropDownMenu;
}
