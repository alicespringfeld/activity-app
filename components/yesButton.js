import { createElement } from "./elements.js";
import styles from "./yesButton.module.css";

export function createYesButton(onClick) {
  const yesButton = createElement("button", {
    className: styles.yesButton,
    textContent: "YES!",
  });

  return yesButton;
}
