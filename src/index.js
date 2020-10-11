import Axios from "axios";

const DISPLAY = document.querySelector("pre");
const FETCH_BTN = document.querySelector("#fetch");
const AXIOS_BTN = document.querySelector("#axios");

const API = "http://localhost:1337/posts";

const fetchApi = async () => {
  try {
    const res = await fetch(API);
    const data = await res.json();

    console.log({ data });
    return data;
  } catch (error) {
    console.log(error);
    console.log(error.response?.data);
  }
};

const axiosApi = async () => {
  try {
    const res = await Axios.get(API);
    const { data } = res;

    console.log({ data });
    return data;
  } catch (error) {
    console.log(error);
    console.log(error.response?.data);
  }
};

const handleRequest = async func => {
  const data = await func();
  DISPLAY.innerText = JSON.stringify(data, undefined, 2);
};

FETCH_BTN.addEventListener("click", async () => await handleRequest(fetchApi));
AXIOS_BTN.addEventListener("click", async () => await handleRequest(axiosApi));
