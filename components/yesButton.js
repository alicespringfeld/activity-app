import { createElement } from "./elements.js";
import styles from "./yesButton.module.css";

export function createYesButton(onClick) {
  const yesButton = createElement("button", {
    textContent: "Yes",
  });

  return yesButton;
}
