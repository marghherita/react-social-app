
const BASE_URL = "https://edgemony-backend.herokuapp.com/";

const http = (resource) => fetch(BASE_URL + resource)
.then(res => res.json());

const httpPOST = (resource, data) =>
  fetch(BASE_URL + resource, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());

export { http, httpPOST };