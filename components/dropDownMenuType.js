import { createElement } from "./elements.js";

export function createDropDownMenuType() {
  const types = [
    "education",
    "recreational",
    "social",
    "diy",
    "charity",
    "cooking",
    "relaxation",
    "music",
    "busywork",
  ];
  const mapped = types.map((activityType) => {
    // because the data from the server does not look like the props that are for
    // creating an element, we go over each json object and pick the values we need
    // and give them a new name
    const props = {
      id: activityType,
      textContent: activityType,
      value: activityType,
    };

    return props;
  });

  const dropDownMenuType = createElement("select", [
    createElement("option", {
      textContent: "choose",
      selected: true,
      disabled: true,
    }),
    ...mapped.map((option) => {
      return createElement("option", option);
    }),
  ]);

  return dropDownMenuType;
}
