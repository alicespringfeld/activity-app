import "./style.css";
import { createElement } from "./components/elements.js";
import { createHeaderComponent } from "./components/headerComponent.js";
import { createYesButton } from "./components/yesButton.js";
import { createDropDownMenuType } from "./components/dropDownMenuType.js";

async function fetchActivity(type) {
  // 1. Get Response
  const response = await fetch(
    "http://www.boredapi.com/api/activity?type=" + type
  );
  // 2. call json() to convert Response to json
  // this is needed for any API call that returns json
  const curryworschd = await response.json();

  // 3. Return json
  return curryworschd;
}

export async function createApp() {
  const appElement = document.querySelector("#app");

  const headerElement = createHeaderComponent();

  const yesButton = createYesButton();

  const dropDownMenuType = createDropDownMenuType();

  const submitButton = createElement("button", { textContent: "Submit" });

  const mainElement = createElement("main", { className: "main" }, [
    createElement("h1", { textContent: "Are you bored?" }),

    yesButton,
  ]);

  appElement.append(headerElement, mainElement);

  let previousActivity = undefined;

  yesButton.onclick = function () {
    const enterBoredPage = document.querySelector(".main");
    while (enterBoredPage.firstChild) {
      enterBoredPage.removeChild(enterBoredPage.firstChild);
    }
    mainElement.append(
      createElement("h2", { textContent: "You can choose..." }),
      createElement("h3", { textContent: "...which kind of activity?" }),

      dropDownMenuType,
      submitButton
    );
  };

  submitButton.onclick = async function () {
    const activity = await fetchActivity(dropDownMenuType.value);
    if (previousActivity === undefined) {
      const shownActivity = createElement("p", {
        textContent: activity.activity,
      });
      mainElement.append(shownActivity);
      previousActivity = shownActivity;
    } else {
      previousActivity.textContent = activity.activity;
    }
  };
}

createApp();
