import axios from "axios";

const instance = axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    "Content-Type": "application/json",
    "Accept-Version": "v1",
    "Authorization": `Client-ID ${'dmFgr6Qp6uKtgdph6-u2BwduF8f3NfuNE4uGJZxfMm4'}`
  },
});

export default instance;