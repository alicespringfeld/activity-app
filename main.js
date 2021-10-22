import "./style.css";
import { createElement } from "./components/elements.js";
import { createHeaderComponent } from "./components/headerComponent.js";
import { createYesButton } from "./components/yesButton";
import { createDropDownMenu } from "./components/dropDownMenu";

export function createApp() {
  const appElement = document.querySelector("#app");

  const headerElement = createHeaderComponent();

  const mainElement = createElement("main", { className: "main" }, [
    createElement("h1", { textContent: "Are you bored?" }),

    createYesButton(),

    createDropDownMenu(),
  ]);

  appElement.append(headerElement, mainElement);

  const activitySelect = document.querySelector("#activitySelect");
  activitySelect.append(
    createElement("option", {
      id: "sports",
      disabled: true,
      selected: true,
      textContent: "choose...",
    }),
    createElement("option", {
      id: "sports",
      textContent: "Sports",
    })
  );
}
createApp();
