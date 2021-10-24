import { createElement } from "./elements.js";

export function createDropDownMenuParticipants() {
  const participants = ["0", "1", "1<"];

  const mapped = participants.map((activityParticipants) => {
    // because the data from the server does not look like the props that are for
    // creating an element, we go over each json object and pick the values we need
    // and give them a new name
    const props = {
      id: activityParticipants,
      textContent: participants,
      value: participants,
    };

    return props;
  });

  const dropDownMenuParticipants = createElement(
    "select",
    { className: "dropDownMenu" },
    [
      createElement("option", {
        textContent: "choose",
        className: "placeholder",
        selected: true,
        disabled: true,
      }),
      ...mapped.map((option) => {
        return createElement("option", option);
      }),
    ]
  );
  return dropDownMenuParticipants;
}
