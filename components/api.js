async function fetchActivity(type) {
  // 1. Get Response
  const response = await fetch(
    "http://www.boredapi.com/api/activity?type=" + type
  );
  // 2. call json() to convert Response to json
  // this is needed for any API call that returns json
  const question = await response.json();

  // 3. Return json
  return question;
}
