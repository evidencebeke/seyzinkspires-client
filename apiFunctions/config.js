import axios from "axios";

// const baseURL = "http://127.0.0.1:1337/api";
const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const requestInstance = axios.create({ baseURL });
