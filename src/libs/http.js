
const BASE_URL = "https://edgemony-backend.herokuapp.com/";

const http = (resource) => fetch(BASE_URL + resource)
.then(res => res.json());

export { http };