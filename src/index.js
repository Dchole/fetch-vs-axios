import Axios from "axios";

const DISPLAY = document.querySelector("pre");
const FETCH_BTN = document.querySelector("#fetch");
const AXIOS_BTN = document.querySelector("#axios");

const API = "http://localhost:1337/posts";

let error;

const fetchApi = async () => {
  try {
    const res = await fetch(`${API}/1`);
    const data = await res.json();

    if (!res.ok) {
      error = data;
      return undefined;
    }

    return data;
  } catch (err) {
    error = err;
  }
};

const axiosApi = async () => {
  try {
    const res = await Axios.get(`${API}/1`);
    const { data } = res;

    return data;
  } catch (err) {
    error = err.response.data;
  }
};

const handleRequest = async func => {
  const data = await func();
  if (data) {
    DISPLAY.innerText = JSON.stringify(data, undefined, 2);
  } else {
    DISPLAY.innerText = JSON.stringify(error, undefined, 2);
    DISPLAY.className = "error";
  }
};

FETCH_BTN.addEventListener("click", async () => await handleRequest(fetchApi));
AXIOS_BTN.addEventListener("click", async () => await handleRequest(axiosApi));
